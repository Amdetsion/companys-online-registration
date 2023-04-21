const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const companySchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  tinNumber: {
    type: Number,
    required: true,
    unique: true
  },
  yearEstablishment: {
    type: Number,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  phonNumber: {
    type: Number,
    required: true,
    unique: true
  },
  website:{
    type: String,
    required: true,
  },
  overview:{
    type: String,
    required: false,
  },
  contactPerson:{
    type: String,
    required: true,
  },
  branch:{
    type: String,
    required: true,
  },
  partner:{
    type: String,
    required: true,
  },
  keyTechnology:{
    type: String,
    required: true,
  },
  classfication:{
    type: String,
    required: true,
  },
  
  logo:{
    type: String,
    required: true,
  },
  
  capital:{
    type: Number,
    required: false,
  },
  
  employe:{
    type: Number,
    required: false,
  },
 
  
  
});

module.exports = mongoose.model("Company", companySchema);

// company