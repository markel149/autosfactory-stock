// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Coche } = initSchema(schema);

export {
  Coche
};