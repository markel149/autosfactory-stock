import React, {useState, useEffect} from 'react';

import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import TablaCochesHistorico from './TablaCochesHistorico';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import { Collection, Image, Card, View, Divider, Button } from '@aws-amplify/ui-react';
import { Storage } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import InformacionGeneralCliente from './InformacionGeneralCliente';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
export function InfoClienteDialog(props) {

    const [coches, setCoches] = useState(initialState)

    const handleClose = () => {
      props.setOpen(false);
      
    };
    
  
    useEffect(() => {
        const pullData = async() => {
        try {
            const c = await props.clienteInfo.Coches.values
            setCoches(c)
            console.log('c',c)
        } catch (e){
            console.log(e)
        }
    }
        pullData()
        fetchImages()
    },[props.clienteInfo.Coches])

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const [imageKeys, setimageKeys] = useState([])
    const [images, setImages] = useState([])
    const fetchImages = async() => {
        const { results } = await Storage.list( 'clientes/' + props.clienteInfo.id ,{level: "private"})
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
                {props.clienteInfo.nombre} {props.clienteInfo.apellido1} {props.clienteInfo.apellido2} - {props.clienteInfo.dni}
                </Typography>
            </Toolbar>
            </AppBar>   

            <Box>
            <Tabs value={value} centered onChange={handleChange} aria-label="basic tabs example" scrollButtons>
                <Tab label="Informacion general"/>
                <Tab label="Historico de compras" />
                <Tab label="Archivos" />
            </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <InformacionGeneralCliente clienteInfo={props.clienteInfo}></InformacionGeneralCliente>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <TablaCochesHistorico coches={coches} heigh='30vh'></TablaCochesHistorico>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <StorageManager
                    acceptedFileTypes={['image/*']}
                    accessLevel="private"
                    path={'clientes/' + props.clienteInfo.id + '/' }
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

export default InfoClienteDialog
