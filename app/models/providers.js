const Provider = (sequelize, Sequelize) => {
    const providers = sequelize.define('providers', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING(45),
            allowNull: false
        }
    })

    providers.associate = (models) => {
        providers.belongsToMany(models.ProductProviders, {
            through: 'ProductProviders',
            as: 'products',
            foreignKey: 'provider_id'
        });
    };

    return providers;
}

export default Provider;