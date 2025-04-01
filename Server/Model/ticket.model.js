let mongoose = require("mongoose");

let ticket = new mongoose.Schema({
    "username":{
        type:String
    },
    "email":{
        type:String
    },
    "phonenumber":{
        type:String
    },
    "seats":{
        type:[Number]
    },
    "date":{
        type: Date
    }
})


let busticket = mongoose.model("busticket",ticket);

module.exports = busticket;