const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://virenderkumar23435:j8QSvsFPlunECdft@cluster0.j2kvupn.mongodb.net/googlebooks" ||
    "mongodb://127.0.0.1:27017/googlebooks"
);

module.exports = mongoose.connection;
