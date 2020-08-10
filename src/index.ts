import { default as client } from '../lib/mongo.ts';

interface DenoSchema {
  _id: { $oid: string };
  title: string;
  content: string;
}

const db = client.database('portfolio');
const deno = db.collection<DenoSchema>('deno');

deno.insertOne({
  content: '',
  title: ''
});
