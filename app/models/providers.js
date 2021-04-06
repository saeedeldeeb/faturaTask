const Provider = (sequelize, Sequelize) => {
    const providers = sequelize.define('providers', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING(45),
            allowNull: false
        }
    })

    providers.associate = (models) => {
        providers.belongsToMany(models.Groups, {
            through: 'ProductProviders',
            as: 'products',
            foreignKey: 'provider_id'
        });
    };

    return providers;
}

export default Provider;