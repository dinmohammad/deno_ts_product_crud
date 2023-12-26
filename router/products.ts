import { Router } from "https://deno.land/x/oak/mod.ts";
import ProductController  from '../controller/products.controller.ts'

const router = new Router();

// router.get('/user', ({response}: {response: any}) => {
//     response.status = 200;
//     response.body = {"message": "Hello Akash valo"};
// })

router.post('/create-product', ProductController.createProduct)
    .get('/get-product', ProductController.getAllProduct)

export default router

