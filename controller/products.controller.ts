import productsModel from "../models/product.model.ts";
import ProductService from "../services/product_db_services.ts";

const nowDate = new Date();


export default {
    createProduct: async ({ request, response }: { request: any; response: any }) => {
        const body = await request.body({ type: 'json' });
        const requestBody = await body.value;
        
        console.log(requestBody);

        try {
            let newData: productsModel =  {
                productName: requestBody.productName,
                productDes: requestBody.productDes,
                created_at: requestBody.created_at  !== null ? requestBody.created_at : nowDate.toISOString(),
                status: requestBody.status
            }
            console.log(newData)
            await ProductService.create(newData);
            response.status = 200;
            response.body=newData;
        } catch (error) {
            console.log(error);
        }
    }

}
