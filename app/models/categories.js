const Category = (sequelize, Sequelize) => {
    const categories = sequelize.define('categories', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING(45),
            allowNull: false
        },
        parent_id: {
            type: Sequelize.INTEGER,

            references: {
                model: 'Category',
                key: 'id'
            }
        }
    })

    categories.associate = (models) => {
        categories.belongsTo(models.Category, { foreignKey: 'parent_id' });
    };

    return categories;
}

export default Category;