const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const companySchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Number,
    required: true,
  },
  
});

module.exports = mongoose.model("Event", companySchema);

// event
