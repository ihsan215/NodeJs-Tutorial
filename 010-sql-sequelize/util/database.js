require("dotenv").config({ path: ".env" });
const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", process.env.PASSWORD, {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
