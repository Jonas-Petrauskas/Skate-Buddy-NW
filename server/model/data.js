const mongoose = require("./index");

const Schema = mongoose.Schema;

const skateBuddySchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  mainDescription: {
    type: String,
  },
  location: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  image: {
    type: String,
  },
});

const Events = mongoose.model("Skate", skateBuddySchema);

module.exports = Events;
