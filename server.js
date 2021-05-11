const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  path = require("path"),
  server = express(),
  PORT = process.env.PORT || 3006,
  db = require("./src/model.fake.lazada");

//open comment for Gen database

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Create MySQL.");
//   console.log("Connected to the MySQL server.");
// });

//----<> sync database <>----
db.sequelize.sync(console.log("Connected to the MySQL server."));

server.use( express.urlencoded({ extended: false }) );
server.use( express.json() );
server.use(cors());
// server.use(express.static(path.resolve(__dirname, "..", "build")));
// server.use(
//   express.static(path.join(__dirname, "/public", "/resources/uploads/"))
// );
// global.__basedir = path.join(__dirname, "/public");
// server.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
// });

require("./src/route.fake.lazada/product_route")(server);

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${PORT}.`);
  console.log("-----------------------------------------");
  console.log(`PLEASE VISIT >> http://localhost:${PORT}. <<`);
  console.log("_________________________________________");
});
