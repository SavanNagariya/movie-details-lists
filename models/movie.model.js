const db = require("../data/database");
const { ObjectId } = require("mongodb");
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
    rating,
    id
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
    this.id = id;
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
    if (this.id) {
      const movieId = ObjectId(this.id);
      return db
        .getDb()
        .collection("movieList")
        .updateOne({ _id: movieId }, { $set: dataList });
    } else {
      return db.getDb().collection("movieList").insertOne(dataList);
    }
  }
}

module.exports = Movie;
