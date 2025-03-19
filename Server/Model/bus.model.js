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
    "reachtime":{
        type:String        
    },
    "startdate":{
        type:String
    },
    "reachdate":{
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
        type:String
    },
    "rating":{
        type:String
    }

})


let busdetailes = mongoose.model("busdetailes",bus);

module.exports = busdetailes;