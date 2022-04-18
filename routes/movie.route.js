const express = require("express");
const router = express.Router();

const movieController = require("../controller/movies.controller");

router.get("/", movieController.viewMovie);
router.post("/", movieController.addMovie);
router.patch("/update/:id", movieController.updateMovie);
router.delete("/delete/:id", movieController.deleteMovie);

module.exports = router;
