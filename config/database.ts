import { Client } from "https://deno.land/x/mysql/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const client = await new Client().connect({
    hostname: 'localhost',
    username: 'root',
    password: 'nrb1234',
    db: 'deno_db',
});

export default client;