const Company = require("../model/Company");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getAllCompany = async (req, res, next) => {
    let companys;
    try {
      companys = await Company.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!companys) {
      return res.status(404).json({ message: "No campony  found" });
    }
    return res.status(200).json({companys });
  };
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let company;
    try {
      company = await Company.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!company) {
      return res.status(404).json({ message: "No pussy found" });
    }
    return res.status(200).json({ company });
  };
  const addCompany = async (req, res, next) => {
    const { companyName, tinNumber, yearEstablishment, region, phonNumber, website, overview,
        contactPerson,branch, partner,keyTechnology,classfication,logo,capital,
        employe, } = req.body;
    let compan;
    try {
        compan = new Company({
        companyName,
        tinNumber,
        yearEstablishment,
        region,
        phonNumber,
        website,
        overview,
        contactPerson,
        branch,
        partner,
        keyTechnology,
        classfication,
        logo,
        capital,
        employe,
      });
      await compan.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!compan) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ compan });
  };
  const updateCompany = async (req, res, next) => {
    const id = req.params.id;
    const { companyName, tinNumber, yearEstablishment, region, phonNumber, website, overview,
        contactPerson,branch, partner,keyTechnology,classfication,logo,capital,
        employe } = req.body;
    let company;
    try {
        company = await Company.findByIdAndUpdate(id, {
        companyName,
        tinNumber,
        yearEstablishment,
        region,
        phonNumber,
        website,
        overview,
        contactPerson,
        branch,
        partner,
        keyTechnology,
        classfication,
        logo,
        capital,
        employe
      });
      company = await company.save();
    } catch (err) {
      console.log(err);
    }
    if (!company) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ company });
  };

  const deleteCompany = async (req, res, next) => {
    const id = req.params.id;
    let company;
    try {
      company = await Company.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!Company) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
 
  exports. getAllCompany =  getAllCompany;
  exports. getById =  getById;
  exports. addCompany =  addCompany;
  exports. updateCompany = updateCompany;
  exports. deleteCompany = deleteCompany;
  