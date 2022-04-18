const { MongoClient } = require("mongodb");

let database;
initDb = async () => {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  database = client.db("movies");
};

getDb = () => {
  if (!database) {
    console.log("database is not connection");
    return;
  }
  return database;
};

module.exports = {
  initDb: initDb,
  getDb: getDb,
};
