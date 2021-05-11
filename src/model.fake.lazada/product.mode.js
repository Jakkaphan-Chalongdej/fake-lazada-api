module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("products", {
    item_id: {
      type: Sequelize.INTEGER,
      // primaryKey: true,
      // autoIncrement: true,
    },
    primary_category: {
      type: Sequelize.INTEGER,
    },
  });

  return Product;
};
