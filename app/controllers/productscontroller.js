import db from '../models/index';
const Product = db.Product;


/**
 * list all product
 * @param {Request} req
 * @returns {Response} res
 */
const index = async (req, res) => {
    const products = await Product.findAll({
        where: {
            category_id: 1
        }
    });

    res.json(products);
}

export default {
    index
}