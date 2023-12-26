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
    findAll: async () => {
        const result = await db.query(`select * from Products`);
        return result;
    },
    findById: async (id: any) => {
        const result = await db.query(`SELECT * FROM Products WHERE id = ?`, [id]);
        return result;
    },
    update: async (data: productsModel) => {
        // console.log(data, 'akash');
        const result = await db.query(
            "UPDATE Products SET productName = ?, productDes = ?, created_at = ?, status = ? WHERE id = ?",
            [data.productName, data.productDes, data.created_at, data.status, data.id],
        );
        return result;
    },
    delete: async(id: any) => {
        const result = await db.query("DELETE FROM Products WHERE id = ?", [id])
        return result;
    }
}
