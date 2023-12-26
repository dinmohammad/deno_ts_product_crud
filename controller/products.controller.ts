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
    }   

}
