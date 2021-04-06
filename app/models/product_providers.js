const ProductProviders = (sequelize, Sequelize) => {
    return sequelize.define('product_providers', {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Product',
                key: 'id'
            }
        },
        provider_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Provider',
                key: 'id'
            }
        },
        price: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        available: {
            type: Sequelize.BOOLEAN,
            default: true
        },

    })
}

export default ProductProviders;