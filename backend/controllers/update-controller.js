const Update = require("../model/Update");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getAllUpdate = async (req, res, next) => {
    let updates;
    try {
        updates = await Update.find();
    } catch (err) {
      console.log(err);
    }
  
    if (! updates) {
      return res.status(404).json({ message: "No campony  found" });
    }
    return res.status(200).json({updates });
  };
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let update;
    try {
        update = await Update.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!update) {
      return res.status(404).json({ message: "not found" });
    }
    return res.status(200).json({ update });
  };
  const addUpdate = async (req, res, next) => {
    const { companyName, content, date } = req.body;
    let update;
    try {
        update = new Update({
        companyName,
        content,
        date,
      });
      await update.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!update) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ update });
  };
  

  const deleteUpdate = async (req, res, next) => {
    const id = req.params.id;
    let update;
    try {
        update = await Update.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!update) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
 
  exports. getAllUpdate =  getAllUpdate;
  exports. getById =  getById;
  exports.  addUpdate =   addUpdate;
  exports. deleteUpdate = deleteUpdate;