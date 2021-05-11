const db = require("../model.fake.lazada");
const Skus = db.Skus;

checkDuplicateSkuID = (req, res, next) => {
  const sku = req.body.SkuId;
  if (sku) {
    // sku ID
    Skus.findOne({
      where: {
        SkuId: req.body.SkuId,
      },
    }).then((skuid) => {
      if (skuid) {
        res.status(400).send({ message: "Failed! sku ID is already in use!" });
        return;
      }
      next();
    });
  } else {
    next();
  }
};
const verifyData = {
  checkDuplicateSkuID: checkDuplicateSkuID,
};

module.exports = verifyData;
