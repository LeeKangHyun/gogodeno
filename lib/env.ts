import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config({
  safe: true,
  export: true,
});

export default env;
