import React from 'react';
import {
  Card,
  Image,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  Button,
} from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";


export function Home({ signOut, user }) {



  return (
    <View
    >
      <Card style={{align: 'center', marginLeft:'auto', marginRight:'auto'}}>
        <Flex direction="row" alignItems="flex-start">
          <Image
            alt="Road to milford sound"
            src="taller.jpeg"
            width="33%"
          />
          <Flex
            direction="column"
            alignItems="flex-start"
          >
            <Flex>
              <Badge size="small" variation="info">
                Stock
              </Badge>
            </Flex>

            <Heading level={5}>
              Stock Coches Autos Alava Factory
            </Heading>

            <Text as="span">
              Aqui puedes encontrar nuestro Stock de coches.
            </Text>
            <Link to="/coches">
            <Button variation="primary">Ir a stock de coches</Button>
            </Link>
          </Flex>
        </Flex>
      </Card>

      <Card>
        <Flex direction="row" alignItems="flex-start">
          
          <Flex
            direction="column"
            alignItems="flex-start"
          >
            <Flex>
              <Badge size="small" variation="info">
                Clientes
              </Badge>
            </Flex>

            <Heading level={5}>
              Base de datos de clientes
            </Heading>

            <Text as="span">
              Aqui puedes encontrar nuestra base de datos de clientes
            </Text>
            <Link to="/clientes">
            <Button variation="primary">Ir a clientes</Button>
            </Link>
          </Flex>
          <Image
            alt="Road to milford sound"
            src="manos.jpeg"
            width="33%"
          />
        </Flex>
      </Card>
    </View>
  );
  }
  
export default Home