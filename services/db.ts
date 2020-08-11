import { default as client } from '../lib/mongo.ts';
import { DenoSchema } from '../types/schema.ts';

const db = client.database('portfolio');
const deno = db.collection<DenoSchema>('deno');
