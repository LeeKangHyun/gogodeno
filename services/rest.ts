import { Router } from 'https://deno.land/x/oak/mod.ts';

const REST = new Router();

REST.get('/api/deno', ({ response }) => {
  response.body = 'Hello Deno World!';
});

REST.get('/api/test', ({ response }) => {
  response.body = 'Hello Test World!';
});

export default REST;
