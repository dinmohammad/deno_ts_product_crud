import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import productRouter from './router/products.ts';

const app = new Application();
const port: number = 8000; // Default route 8000

app.use(oakCors({ origin: "*" }));

// Product route
app.use(productRouter.routes());
app.use(productRouter.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
    const protocol = secure ? "https://" : "http://";
    const url = `${protocol}${hostname ?? "localhost"}:${port}`;
    console.log(`Listening on: ${url}`);
});

await app.listen({ port });
export default app;
