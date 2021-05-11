const verifyData = require("../middleware/verifyData");
const product = require("../controller.fake.lazada/product.controller");
const upload = require("../middleware/upload");
module.exports = function (server) {
  // Create
  server.post(
    "/api/product/create",
    upload.single("uploadfile"),
    verifyData.checkDuplicateSkuID,
    product.create
  );

  // Retrieve all
  server.get("/api/products/get", product.findAll);

  // Retrieve a singl by Id
  server.get("/api/product/:productId", product.findById);

  // Update by Id
  server.put(
    "/api/product/update",
    upload.single("uploadfile"),
    verifyData.checkDuplicateSkuID,
    product.update
  );

  // Delete by Id
  server.delete("/api/product/remove/:id", product.delete);
};
