const Content = require("../model/Content");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getAllContent = async (req, res, next) => {
    let contents;
    try {
        contents = await Content.find();
    } catch (err) {
      console.log(err);
    }
  
    if (! contents) {
      return res.status(404).json({ message: "No campony  found" });
    }
    return res.status(200).json({contents });
  };
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let content;
    try {
        content = await Content.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!content) {
      return res.status(404).json({ message: "Nfuck you" });
    }
    return res.status(200).json({ content });
  };
  const addContent = async (req, res, next) => {
    const { messageMinistry, messageDirector, phone,email,
        facebook, aboutus, imgmnister,imgdirector,carousalImageone, 
        carousalImagetwo,carousalImagethree,newsImageone,newsImagetwo,newsImagethree,newsHeadlineOne,
        newsHeadlineTwo,newsHeadlineThree, } = req.body;
    let content;
    try {
        content = new Content({
            messageMinistry, 
            messageDirector, 
            phone,email,
            facebook, 
            aboutus, 
            imgmnister,
            imgdirector,
            carousalImageone, 
            carousalImagetwo,
            carousalImagethree,
            newsImageone,
            newsImagetwo,
            newsImagethree,
            newsImageone,
            newsImagetwo,
            newsImagethree,
            newsHeadlineOne,
            newsHeadlineTwo,
            newsHeadlineThree,
      });
      await content.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!content) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ content });
  };
  const updateContent = async (req, res, next) => {
    const id = req.params.id;
    const { messageMinistry, messageDirector, phone,email,
        facebook, aboutus, imgmnister,imgdirector,carousalImageone, 
        carousalImagetwo,carousalImagethree,newsImageone,newsImagetwo,newsImagethree,newsHeadlineOne,
        newsHeadlineTwo,newsHeadlineThree, } = req.body;
    let content;
    try {
        content = await Content.findByIdAndUpdate(id, {
            messageMinistry, 
            messageDirector, 
            phone,
            email,
            facebook, 
            aboutus, 
            imgmnister,
            imgdirector,
            imgdirector,
            carousalImageone, 
            carousalImagetwo,
            carousalImagethree,
            newsImageone,
            newsImagetwo,
            newsImagethree,
            newsHeadlineOne,
            newsHeadlineTwo,
            newsHeadlineThree,
    
      });
      content = await content.save();
    } catch (err) {
      console.log(err);
    }
    if (!content) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({content });
  };

  const deleteContent = async (req, res, next) => {
    const id = req.params.id;
    let content;
    try {
        content = await Content.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!content) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
 
  exports. getAllContent = getAllContent;
  exports. getById =  getById;
  exports.  addContent =   addContent;
  exports. updateContent = updateContent;
  exports. deleteContent = deleteContent;