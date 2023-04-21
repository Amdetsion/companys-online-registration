const News = require("../model/News");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getAllNews = async (req, res, next) => {
    let newss;
    try {
        newss = await News.find();
    } catch (err) {
      console.log(err);
    }
  
    if (! newss) {
      return res.status(404).json({ message: "No news found " });
    }
    return res.status(200).json({newss });
  };
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let news;
    try {
        news = await News.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!news) {
      return res.status(404).json({ message: "no news in datbase" });
    }
    return res.status(200).json({ news });
  };
  const addNews = async (req, res, next) => {
    const { newstitle,  newscontent, date } = req.body;
    let news;
    try {
        news = new News({
        newstitle,
        newscontent,
        date,
      });
      await news.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!news) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ news });
  };
  const updateNews = async (req, res, next) => {
    const id = req.params.id;
    const { newstitle,  newscontent, date } = req.body;
    let news;
    try {
        news = await News.findByIdAndUpdate(id, {
            newstitle,
            newscontent,
        date,
    
      });
      news = await news.save();
    } catch (err) {
      console.log(err);
    }
    if (!news) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ news });
  };

  const deleteNews = async (req, res, next) => {
    const id = req.params.id;
    let news;
    try {
      news = await News.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!news) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
 
  exports.getAllNews = getAllNews;
  exports.getById = getById;
  exports.addNews = addNews;
  exports.updateNews = updateNews;
  exports.deleteNews = deleteNews;