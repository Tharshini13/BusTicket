let mongoose = require("mongoose");

let ticket = new mongoose.Schema({
    "name":{
        type:String
    },
    "email":{
        type:String
    },
    "phone_number":{
        type:String
    },
    "seat":{
        type:[]
    }
})


let busticket = mongoose.model("busticket",ticket);

module.exports = busticket;