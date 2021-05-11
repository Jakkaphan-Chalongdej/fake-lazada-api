module.exports = (sequelize, Sequelize) => {
  const Attributes = sequelize.define("attributes", {
    short_description: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    warranty_type: {
      type: Sequelize.STRING,
    },
    brand: {
      type: Sequelize.STRING,
    },
  });

  return Attributes;
};
