import { Router } from "https://deno.land/x/oak/mod.ts";
import ProductController  from '../controller/products.controller.ts'
import productsController from "../controller/products.controller.ts";

const router = new Router();

// router.get('/user', ({response}: {response: any}) => {
//     response.status = 200;
//     response.body = {"message": "Hello Akash valo"};
// })

router.post('/create-product', ProductController.createProduct)
router.get('/get-product', ProductController.getAllProduct)
router.get('/get-by-id-product/:id', ProductController.getByIdProduct)
router.put('/update-product/:id', ProductController.updateProduct)
router.delete('/delete-product/:id', productsController.deleteProduct)
export default router

