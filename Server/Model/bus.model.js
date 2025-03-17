let mongoose = require("mongoose");

 let bus = new mongoose.Schema({
    "from":{
        type:String
    },
    "to":{
        type:String
    },
    "date":{
        type:String
    },
    "starttime":{
        type:String
    },
    "reachingtime":{
        type:String
    },
    "startdate":{
        type:String
    },
    "reachingdate":{
        type:String
    },
    "totalhours":{
        type:String
    },
    "travelsname":{
        type:String
    },
    "utilities":{
        type:Boolean
    },
    
    "type":{
        type:String
    },
    "price":{
        type:Number
    },
    "rating":{
        type:Number
    }

})


let busdetailes = mongoose.model("busdetailes",bus);

module.exports = busdetailes;