import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config({
  path: '../.env',
  safe: true,
  export: true,
});

export default env;
