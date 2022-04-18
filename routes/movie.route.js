const express = require("express");
const router = express.Router();

const movieController = require("../controller/movies.controller");

router.get("/", movieController.viewMovie);
router.post("/", movieController.addMovie);
router.patch("/update", movieController.updateMovie);
router.delete("/delete", movieController.deleteMovie);

module.exports = router;
