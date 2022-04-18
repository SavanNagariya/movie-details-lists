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
  console.log(movie);

  try {
    const result = movie.save();
  } catch (error) {
    next(error);
    return;
  }

  res.json({ message: "insert is successfully", insertMovie: movie });
};
const updateMovie = (req, res, next) => {
  res.json();
};
const deleteMovie = (req, res, next) => {
  res.json();
};

module.exports = {
  viewMovie: viewMovie,
  addMovie: addMovie,
  updateMovie: updateMovie,
  deleteMovie: deleteMovie,
};
