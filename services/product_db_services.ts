import db from '../config/database.ts'
import productsModel from "../models/product.model.ts";

export default {
    create: async (data: productsModel) => {
        let result = await db.query(
            "insert into Products(productName, productDes, created_at, status ) values (?,?,?,?)",
            [data.productName, data.productDes, data.created_at, data.status],
        );
        return result;
    },
}
