const router = require("express").Router();
let Improve = require("../models/Improve");

//add new data
exports.addImprove = async (req, res) => {
 
    //constant variables for the attributes
    const {name,age,mobile,type,employees,expectation} = req.body;
   
    //object
    const newImprove = new Improve({
      name,
      age,
      mobile,
      type,
      employees,
      expectation
    })
   
    //saving the object to the db 
    newImprove.save().then(() => {
      res.status(200).json({ status: "Improve data added successfully!" });
    }).catch((error) => {
      res.status(500).json({message:"Fail to add data",error:error.message})
    })
  }
  
  
  //view Improve Data
  exports.viewAll = async (req, res) => { 
   
    //calling improve model
    Improve.find().then((improve) => {
      res.status(200).json(improve)
    }).catch((error) => {
      res.status(500).json({ message: "Error with fetching improve data!", error: error.message });
    })
  }

  exports.updateImproveData = async(req,res) => {

    let reqID = req.params.id;
    const { status } = req.body;

    const updateReq = { status } 
    
    try{
        //find request by ID  
        await Improve.findByIdAndUpdate(reqID , updateReq);

        res.status(200).json({message:"request updated!"})
    }catch(error){
        res.status(500).json({message:"Error with updating details",error:error.message});
    }

}

//delete existing request
exports.deleteRequest = async (req, res) => {
    let reqID = req.params.id;
   
    await Improve.findByIdAndDelete(reqID).then(() => {
      res.status(200).json({ status: "Request Deleted!" });
    }).catch((error) => {
      res.status(500).json({ status: "Error with Deleting Request", error: error.message });
    })
}