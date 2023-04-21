const Event = require("../model/Event");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getAllEvent = async (req, res, next) => {
    let events;
    try {
        events = await Event.find();
    } catch (err) {
      console.log(err);
    }
  
    if (! events) {
      return res.status(404).json({ message: "No campony  found" });
    }
    return res.status(200).json({events });
  };
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let event;
    try {
      event = await Event.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!event) {
      return res.status(404).json({ message: "Nfuck you" });
    }
    return res.status(200).json({ event });
  };
  const addEvent = async (req, res, next) => {
    const { companyName, content, date } = req.body;
    let event;
    try {
        event = new Event({
        companyName,
        content,
        date,
      });
      await event.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!event) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ event });
  };
  const updateEvent = async (req, res, next) => {
    const id = req.params.id;
    const { companyName, content, date } = req.body;
    let event;
    try {
        event = await Event.findByIdAndUpdate(id, {
        companyName,
        content,
        date,
    
      });
      event = await event.save();
    } catch (err) {
      console.log(err);
    }
    if (!event) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ event });
  };

  const deleteEvent = async (req, res, next) => {
    const id = req.params.id;
    let event;
    try {
      event = await Event.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!event) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
 
  exports. getAllEvent =  getAllEvent;
  exports. getById =  getById;
  exports.  addEvent =   addEvent;
  exports. updateEvent = updateEvent;
  exports. deleteEvent = deleteEvent;