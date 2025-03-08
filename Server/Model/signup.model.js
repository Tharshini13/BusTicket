let mongoose = require("mongoose");

let signup = new mongoose.Schema({
    "username":{
        type:String
    },
    "password":{
        type:String
    },
    "email":{
        type:String
    }
})


let signupModel = mongoose.model("signupData",signup);

module.exports = signupModel;