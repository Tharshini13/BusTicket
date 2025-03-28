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
    }
})


let busticket = mongoose.model("busticket",ticket);

module.exports = busticket;