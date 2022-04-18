const Movie = require("../models/movie.model");

const viewMovie = async (req, res, next) => {
  let movie;

  try {
    movie = await Movie.findAll();
  } catch (error) {
    next(error);
    return;
  }

  res.json({ movies: movie });
};

const addMovie = async (req, res, next) => {
  const movie = new Movie(
    null,
    req.body.name,
    req.body.subname,
    req.body.type,
    req.body.cast,
    req.body.director,
    req.body.budget,
    req.body.date,
    req.body.hours,
    req.body.minutes,
    req.body.rating
  );

  try {
    const result = movie.save();
  } catch (error) {
    next(error);
    return;
  }

  res.json({ message: "insert is successfully", insertMovie: movie });
};
const updateMovie = async (req, res, next) => {
  const movie = new Movie(
    req.params.id,
    req.body.name,
    req.body.subname,
    req.body.type,
    req.body.cast,
    req.body.director,
    req.body.budget,
    req.body.date,
    req.body.hours,
    req.body.minutes,
    req.body.rating
  );

  let updateMovie;
  try {
    updateMovie = movie.save();
  } catch (error) {
    next(error);
    return;
  }
  res.json({ message: "movies updated", updated: movie });
};
const deleteMovie = async (req, res, next) => {
  const movie = new Movie(req.params.id);

  try {
    await movie.delete();
  } catch (error) {
    next(error);
    return;
  }
  res.json({ message: "deleted" });
};

module.exports = {
  viewMovie: viewMovie,
  addMovie: addMovie,
  updateMovie: updateMovie,
  deleteMovie: deleteMovie,
};
