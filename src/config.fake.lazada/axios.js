const axios = require("axios");

export default axios.create({
  // baseURL: "http://localhost:3004/api/",
  baseURL: "http://localhost:3006/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
