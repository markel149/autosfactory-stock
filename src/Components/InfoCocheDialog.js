import React, {useState, useEffect} from 'react';

import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import { Collection, Image, Card, View, Divider, Button } from '@aws-amplify/ui-react';
import { Storage } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import InformacionGeneralCoche from './InformacionGeneralCoche';
import EspecificacionesTecnicasCoche from './EspecificacionesTecnicasCoche';
import DetallesCompraCoche from './DetallesCompraCoche';
import DetallesVentaCoche from './DetallesVentaCoche';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BuildIcon from '@mui/icons-material/Build';

const initialState = []

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
export function InfoCocheDialog(props) {

    const [coches, setCoches] = useState(initialState)

    const handleClose = () => {
      props.setOpen(false);
      setValue(0)
      
    };
    
  
    useEffect(() => {
        const pullData = async() => {
        try {
            const c = await props.cocheInfo.Coches.values
            setCoches(c)
            console.log('c',c)
        } catch (e){
            console.log(e)
        }
    }
        pullData()
        fetchImages()
    },[props.cocheInfo.Coches])

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const [imageKeys, setimageKeys] = useState([])
    const [images, setImages] = useState([])
    const fetchImages = async() => {
        const { results } = await Storage.list( 'coches/' + props.cocheInfo.id ,{level: "private"})
        setimageKeys(results)
        const s3images = await Promise.all(
            results.map(
                async image  => await Storage.get(image.key, {level: "private"})
            )
        )
        setImages(s3images)

    }

    async function deleteImage (imageKey) {
        console.log(imageKeys[imageKey])
        await Storage.remove(imageKeys[imageKey].key, { level: 'private' });
        fetchImages()
    }

  
  
    return (
        <div>
            <Dialog
                fullScreen
                open={props.open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
            <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
                <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose }
                aria-label="close"
                >
                <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {props.cocheInfo.marca} {props.cocheInfo.modelo} - {props.cocheInfo.matricula}
                </Typography>
            </Toolbar>
            </AppBar>   

            <Box sx={{alignContent: 'center'}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant='scrollable' scrollButtons allowScrollButtonsMobile centered>
                <Tab icon={<InfoIcon/>} iconPosition='start' label="Informacion general"/>
                <Tab icon={<BuildIcon/>} iconPosition='start' label="Especificaciones Tecnicas"/>
                <Tab icon={<ShoppingCartIcon/>} iconPosition='start' label="Detalles Compra"/>
                <Tab icon={<AttachMoneyIcon/>} iconPosition='start' label="Detalles Venta"/>
                <Tab icon={<PhotoCameraIcon/>} iconPosition='start' onClick={fetchImages} label="Fotos"/>
            </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <InformacionGeneralCoche cocheInfo={props.cocheInfo}></InformacionGeneralCoche>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
                <EspecificacionesTecnicasCoche cocheInfo={props.cocheInfo}></EspecificacionesTecnicasCoche>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
                <DetallesCompraCoche cocheInfo={props.cocheInfo}></DetallesCompraCoche>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={3}>
                <DetallesVentaCoche cocheInfo={props.cocheInfo}></DetallesVentaCoche>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={4}>
                <StorageManager
                    acceptedFileTypes={['image/*']}
                    accessLevel="private"
                    path={'coches/' + props.cocheInfo.id + '/' }
                    onUploadSuccess={fetchImages}
                    maxFileCount={1}

                />
                <Collection
                items={images}
                type="grid"
                padding="2rem"
                gap="small"
                templateColumns="1fr 1fr 1fr"
                >
                {(item, index) => (
                    <Card
                    key={index}
                    borderRadius="medium"
                    maxWidth="50rem"
                    variation="outlined"
                    >
                    <Image
                        src={item}
                        alt="Glittering stream with old log, snowy mountain peaks tower over a green field."
                    />
                    <View padding="xs">
                        <Divider padding="xs" />
                        <Button variation="primary">
                           Download
                        </Button>
                        <Button variation="secondary" onClick={() => deleteImage(index)}>
                           Delete
                        </Button>
                    </View>
                    </Card>
                )}
                </Collection>

            </CustomTabPanel>            
            </Dialog>
        </div>
    )
}

export default InfoCocheDialog
