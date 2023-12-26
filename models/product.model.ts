import { Data } from "https://deno.land/std@0.200.0/crypto/keystack.ts";
import { Status } from "https://deno.land/x/oak@v12.6.1/deps.ts";

export default interface Products{
    id?: number,
    productName: string,
    productDes: string,
    created_at: string,
    status: number
}