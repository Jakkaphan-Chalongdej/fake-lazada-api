module.exports = (sequelize, Sequelize) => {
  const Skus = sequelize.define("skus", {
    Status: {
      type: Sequelize.STRING,
    },
    quantity: {
      type: Sequelize.STRING,
    },
    product_weight: {
      type: Sequelize.STRING,
    },
    Images: {
      type: Sequelize.STRING,
    },
    SellerSku: {
      type: Sequelize.STRING,
    },
    ShopSku: {
      type: Sequelize.STRING,
    },
    Url: {
      type: Sequelize.STRING,
    },
    package_width: {
      type: Sequelize.FLOAT,
    },
    special_to_time: {
      type: Sequelize.DATE,
    },
    special_from_time: {
      type: Sequelize.DATE,
    },
    package_height: {
      type: Sequelize.FLOAT,
    },
    special_price: {
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.STRING,
    },
    package_length: {
      type: Sequelize.FLOAT,
    },
    package_weight: {
      type: Sequelize.FLOAT,
    },
    Available: {
      type: Sequelize.INTEGER,
    },
    SkuId: {
      type: Sequelize.STRING,
    },
    special_to_date: {
      type: Sequelize.DATE,
    },
  });
  return Skus;
};
