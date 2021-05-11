const config = require("../config.fake.lazada/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require("./product.mode")(sequelize, Sequelize);
db.attributes = require("./attributes.model")(sequelize, Sequelize);
db.Skus = require("./sku.model")(sequelize, Sequelize);

db.product.hasMany(db.attributes, { foreignKey: "item_id" });
db.attributes.belongsTo(db.product, { foreignKey: "item_id" });

db.product.hasMany(db.Skus, { foreignKey: "item_id" });
db.Skus.belongsTo(db.product, { foreignKey: "item_id" });

module.exports = db;
