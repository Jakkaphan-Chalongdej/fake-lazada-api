const db = require("../model.fake.lazada");
const Product = db.product;
const Attributes = db.attributes;
const Skus = db.Skus;

exports.create = (req, res) => {
  Product.create({
    item_id: req.body.id,
    primary_category: req.body.primary_category,
  })
    .then((item) => {
      Attributes.create({
        item_id: item.dataValues.item_id,
        short_description: req.body.short_description,
        name: req.body.name,
        description: req.body.description,
        warranty_type: req.body.warranty_type,
        brand: req.body.brand,
      });
      Skus.create({
        item_id: item.dataValues.item_id,
        Status: req.body.Status,
        quantity: req.body.quantity,
        product_weight: req.body.product_weight,
        Images: req.body.Images,
        SellerSku: req.body.SellerSku,
        ShopSku: req.body.ShopSku,
        Url: req.body.Url,
        package_width: req.body.package_width,
        special_to_time: req.body.special_to_time,
        special_from_time: req.body.special_from_time,
        package_height: req.body.package_height,
        special_price: req.body.special_price,
        price: req.body.price,
        package_length: req.body.package_length,
        package_weight: req.body.package_weight,
        Available: req.body.Available,
        SkuId: req.body.SkuId,
        special_to_date: req.body.special_to_date,
      });
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
      res.json({ err: "Create Failed" });
    });
};

// Find all products
exports.findAll = (req, res) => {
  Product.findAll({
    order: [["id", "DESC"]],
    include: [
      {
        model: Skus,
      },
      { model: Attributes },
    ],
  }).then((products) => {
    res.send(products);
  });
};

// Find a products by Id
exports.findById = (req, res) => {
  const id = req.params.productId;
  Product.findByPk(id, {
    include: [
      {
        model: Skus,
      },
      { model: Attributes },
    ],
  }).then((product) => {
    res.status(200).send(product);
  });
};

// Update products
exports.update = (req, res) => {
  const id = req.body.id;
  console.log("-----<Product ID>------ :", req.body.id);
  console.log("-----<Product body>------ :", req.body);
  Product.update(
    {
      primary_category: req.body.primary_category,
    },
    { where: { item_id: id } }
  ).then(() => {
    console.log("-----<Product>------");
  });
  Attributes.update(
    {
      short_description: req.body.short_description,
      name: req.body.name,
      description: req.body.description,
      warranty_type: req.body.warranty_type,
      brand: req.body.brand,
    },
    { where: { item_id: id } }
  ).then(() => {
    console.log("-----<Attributes>------");
  });
  Skus.update(
    {
      Status: req.body.Status,
      quantity: req.body.quantity,
      product_weight: req.body.product_weight,
      Images: req.body.Images,
      SellerSku: req.body.SellerSku,
      ShopSku: req.body.ShopSku,
      Url: req.body.Url,
      package_width: req.body.package_width,
      special_to_time: req.body.special_to_time,
      special_from_time: req.body.special_from_time,
      package_height: req.body.package_height,
      special_price: req.body.special_price,
      price: req.body.price,
      package_length: req.body.package_length,
      package_weight: req.body.package_weight,
      Available: req.body.Available,
      SkuId: req.body.SkuId,
      special_to_date: req.body.special_to_date,
    },
    { where: { item_id: id } }
  ).then(() => {
    console.log("-----<Skus>------");
  });
};

// Delete a products by Id
exports.delete = (req, res) => {
  const id = req.params.id;
  console.log("------D-----", id);
  Product.destroy({
    where: { item_id: id },
  })
    .then(() => {
      res.status(200).send("Deleted successfullyid = " + id);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
      res.json({ err: "Deleted Failed" });
    });
};
return false;
