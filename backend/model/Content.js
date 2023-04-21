const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const companySchema = new Schema({
  messageMinistry: {
    type: String,
    required: false,
  },
  messageDirector: {
    type: String,
    required: false,
  },
 phone: {
    type: Number,
    required:false,
  },
  email: {
    type: String,
    required: false,
  },
  
  facebook:{
    type: String,
    required: false,
  },
  aboutus:{
    type: String,
    required: false,
  },
  imgmnister:{
    type: String,
    required: false,
  },
  imgdirector:{
    type: String,
    required: false,
  },
  
  carousalImageone:{
    type: String,
    required: false,
  },
  carousalImagetwo:{
    type: String,
    required: false,
  },
  carousalImagethree:{
    type: String,
    required: false,
  },
  newsImageone:{
    type: String,
    required: false,
  },
  newsImagetwo:{
    type: String,
    required: false,
  },
  newsImagethree:{
    type: String,
    required: false,
  },
  newsHeadlineOne:{
    type: String,
    required: false,
  },
  newsHeadlineTwo:{
    type: String,
    required: false,
  },
  newsHeadlineThree:{
    type: String,
    required: false,
  }

});

module.exports = mongoose.model("Content", companySchema);

// content