// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cliente, Coche } = initSchema(schema);

export {
  Cliente,
  Coche
};