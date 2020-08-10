import { MongoClient } from "https://deno.land/x/mongo@v0.9.2/mod.ts";
import env from './env.ts';

const client = new MongoClient();

console.log(`Starting MongoDB :)`)
client.connectWithUri(`mongodb+srv://${env['user']}:${env['password']}@${env['uri']}`);

export default client;
