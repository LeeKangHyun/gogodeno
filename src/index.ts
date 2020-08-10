import { serve } from 'https://deno.land/std/http/server.ts';

import { default as client } from '../lib/mongo.ts';
import { DenoSchema } from '../types/schema.ts';

const db = client.database('portfolio');
const deno = db.collection<DenoSchema>('deno');

const PORT = 3000;

const server = serve({ port: PORT });

console.log(`Server Running on ${PORT}`);
