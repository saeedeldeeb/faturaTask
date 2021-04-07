import db from '../models/index';
const Product = db.Product;


/**
 * list all product
 * @param {Request} req
 * @returns {Response} res
 */
const index = async (req, res, next) => {
    const { page, size, catId } = req.query;
    const { limit, offset } = getPagination(page, size);

    const products = await
        db.sequelize.query('SELECT  p.*,MIN(pp.Price) price FROM  products p INNER JOIN product_providers pp ON p.id = pp.products_id WHERE p.category_id=:id AND pp.available=1 GROUP BY p.id LIMIT :limit OFFSET :offset', {
            replacements: { id: catId, limit: limit, offset: offset },
            type: db.sequelize.QueryTypes.SELECT
        });

    res.data = products;
    res.page = page;
    res.limit = limit;
    next();
}

/**
 * Create pagination params for query 
 * //TODO:this method is a helper method and should be in a separated file
 * @param {Number} page 
 * @param {Number} size 
 * @returns Object
 */
const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

/**
 * Set and Unset product
 * @param {Request} req 
 * @param {Response} res 
 */
const toggle = (req, res) => {
    const toggle = db.sequelize.query('UPDATE product_providers SET available = !available WHERE products_id = :id',
        {
            replacements: { id: req.params.id }
        });

    res.json({ message: "product updated successfully" });
}

export default {
    index, toggle
}