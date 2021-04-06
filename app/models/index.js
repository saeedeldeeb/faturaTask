import dbConfig from "../../config/db.config";
import Sequelize from "sequelize";
import Category from './categories';
import Product from './products';
import Provider from './providers';
import ProductProviders from './product_providers';


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Category = Category(sequelize, Sequelize);
db.Product = Product(sequelize, Sequelize);
db.Provider = Provider(sequelize, Sequelize);
db.ProductProviders = ProductProviders(sequelize, Sequelize);

db.Category.associate(db);
db.Product.associate(db);
db.Provider.associate(db);
db.ProductProviders.associate(db);


export default db;