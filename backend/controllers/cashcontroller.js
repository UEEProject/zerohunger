const router = require("express").Router();
let Cash = require("../models/Cash");

//add new doc
exports.addCash = async (req, res) => {
 
    //constant variables for the attributes
    const {name,email,bank,amount,details,slip} = req.body;
   
    //object
    const newCash= new Cash({
      name,
      email,
      bank,
      amount,
      details,
      slip
    })
   
    //saving the object to the db 
    newCash.save().then(() => {
      res.status(200).json({ status: "Cash Donation Successful" });
    }).catch((error) => {
      res.status(500).json({message:"Fail to Donate Cash",error:error.message})
    })
  }
  
  
  //view Cash
  exports.viewAllCash = async (req, res) => { 
   
    //calling Cash model
    Cash.find().then((cash) => {
      res.status(200).json(cash)
    }).catch((error) => {
      res.status(500).json({ message: "Error with fetching cash donations", error: error.message });
    })
  }
   

  
  
  