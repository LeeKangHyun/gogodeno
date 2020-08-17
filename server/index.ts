import { Application } from 'https://deno.land/x/oak/mod.ts';
import REST from '../services/rest.ts';

const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(REST.routes());
app.use(REST.allowedMethods());

const PORT = 8000;

app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${hostname ?? "localhost"}:${port}`
  )
});

await app.listen({ port: PORT });
console.log('Terminated :(');
