import { Router } from 'https://deno.land/x/oak/mod.ts';

const REST = new Router();

REST.get('/api/test', ({ response }) => {
  response.body = 'Hello World!';
});

export default REST;
