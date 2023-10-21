const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const exp = require("constants");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routers);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);

// module.exports = path.dirname(require.main.filename);
