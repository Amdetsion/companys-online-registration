const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const companySchema = new Schema({
  newstitle: {
    type: String,
    required: true,
  },
  newscontent: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Number,
    required: true,
  },
  
});

module.exports = mongoose.model("News", companySchema);

// event
