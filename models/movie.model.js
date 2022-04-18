const db = require("../data/database");

class Movie {
  constructor(
    name,
    subname,
    type,
    cast,
    director,
    budget,
    date,
    hours,
    minutes,
    rating
  ) {
    this.name = name;
    this.subname = subname;
    this.type = type;
    this.cast = cast;
    this.director = director;
    this.budget = budget;
    this.date = date;
    this.hours = hours;
    this.minutes = minutes;
    this.rating = rating;
  }

  static async findAll() {
    const movie = await db.getDb().collection("movieList").find().toArray();
    return movie;
  }
  save() {
    const dataList = {
      name: this.name,
      subname: this.subname,
      type: this.type,
      cast: this.cast,
      director: this.director,
      budget: this.budget,
      date: this.date,
      hours: this.hours,
      minutes: this.minutes,
      rating: this.rating,
    };
    return db.getDb().collection("movieList").insertOne(dataList);
  }
}

module.exports = Movie;
