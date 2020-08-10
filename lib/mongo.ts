import { MongoClient } from "https://deno.land/x/mongo@v0.9.2/mod.ts";
import env from './env.ts';

const client = new MongoClient();

const { user, password, uri } = env;

console.log(`Starting MongoDB :)`)
client.connectWithUri(`mongodb+srv://${user}:${password}@${uri}`);

export default client;
