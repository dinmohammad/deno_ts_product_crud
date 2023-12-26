import productsModel from "../models/product.model.ts";
import ProductService from "../services/product_db_services.ts";

const nowDate = new Date();


export default {
    createProduct: async ({ request, response }: { request: any; response: any }) => {
        const body = await request.body({ type: 'json' });
        const requestBody = await body.value;
        
        try {
            let newData: productsModel =  {
                productName: requestBody.productName,
                productDes: requestBody.productDes,
                created_at: requestBody.created_at  !== null ? requestBody.created_at : nowDate.toISOString(),
                status: requestBody.status
            }
            // console.log(newData)
            await ProductService.create(newData);
            if(ProductService){
                response.status = 200;
                response.body=newData;
            }else{
                response.status = 400;
                response.body = { message: "Failed product create" };
            }
        } catch (error) {
            console.log(error);
        }
    },

    getAllProduct: async ({ response }: { response: any }) => {
        try {
            const products = await ProductService.findAll();
            if(products){
                response.status = 200;
                response.body=products;
            }else{
                response.status = 400;
                response.body = { message: "No found products" };
            }
        } catch (error) {
            console.log(error)
        }
    },
    getByIdProduct: async (
        { response, params }: { response: any; params: {id : string} }
    ) => {
        try {
            const product = await ProductService.findById(params.id);
            if(product){
                response.status = 200;
                response.body=product;
            }else{
                response.status = 400;
                response.body = { message: "No found product" };
            }
        } catch (error) {
            console.log(error)
        }
    },
    updateProduct: async ({ request, response, params }: { request: any; response: any, params: any }) => {
        const body = await request.body({ type: 'json' });
        const requestBody = await body.value;
        // console.log(requestBody)
        
        try {
            let product: productsModel =  {
                id: params.id,
                productName: requestBody.productName,
                productDes: requestBody.productDes,
                created_at: requestBody.created_at  !== null ? requestBody.created_at : nowDate.toISOString(),
                status: requestBody.status
            }
            // console.log(product)
            const data = await ProductService.update(product);
            if(!data){
                response.status = 500;
                response.body = { message: "Failed product update. No 'id' Found data Record" };
            }else{
                response.status = 200;
                response.body = { message: "Successfully update product", data: product };
            }
        } catch (error) {
            console.log(error);
        }
    },

    deleteProduct: async (
        { response, params }: { response: any; params: {id : string} }
    ) => {
        try {
            const product = await ProductService.delete(params.id);
            if(product){
                response.status = 200;
                response.body=product;
            }else{
                response.status = 404;
                response.body = { message: "Failed Successfully Delete" };
            }
        } catch (error) {
            console.log(error)
        }
    },



}
