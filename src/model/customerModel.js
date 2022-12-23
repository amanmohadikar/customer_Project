const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    firstName :{
        type : String,
        required : true,
        trim : true
    }, 
    lastName :{
        type : String,
        required : true,
        trim : true
    }, 
    mobileNumber : {
        type : String,
        required : true,
        trim : true
    }, 
    DOB : {
        type : Date,
        required : true,
        trim : true
    }, 
    emailID : {
        type : String,
        required : true,
        trim : true
    }, 
    address : {
        type : String,
        required : true,
        trim : true
    }, 
    customerID : {
        type : String,
        required : true,
        trim : true
    }, 
    status : {
            type : String,
            required : true,
            trim : true,
        enum : ["ACTIVE" , "INACTIVE"]
    }
    
},{timestamps : true})

module.exports = mongoose.model("customer", customerSchema)