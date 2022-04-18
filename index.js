const express = require("express");
const db = require("./data/database");
const app = express();

const movieRoute = require("./routes/movie.route");
const enableCors = require("./middleware/cors");

app.use(enableCors);

app.use(express.json());

app.use("/movie", movieRoute);

app.use((error, req, res, next) => {
  res.status(500).json({
    message: "Something is wrong" + error,
  });
});

db.initDb()
  .then(() => {
    app.listen(4500);
  })
  .catch((error) => {
    console.log("server problem", error);
  });
