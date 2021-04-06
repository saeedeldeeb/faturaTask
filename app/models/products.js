const Product = (sequelize, Sequelize) => {
    const products = sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING(45),
            allowNull: false
        },
        image_uri: Sequelize.STRING,
        category_id: {
            type: Sequelize.INTEGER,

            references: {
                model: 'Category',
                key: 'id'
            }
        }
    })

    products.associate = (models) => {
        products.belongsToMany(models.ProductProviders, {
            through: 'ProductProviders',
            as: 'providers',
            foreignKey: 'product_id'
        });

        products.belongsTo(models.Category, { foreignKey: 'category_id' });
    };

    return products;
}

export default Product;