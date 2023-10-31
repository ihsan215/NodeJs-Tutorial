require("dotenv").config({ path: ".env" });
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://ihsan215:${process.env.PASSWORD}@cluster0.jzgmpbz.mongodb.net/?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("Connected");
      _db = client.db("test");
      callback(client);
    })
    .catch((e) => {
      console.log(e);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
