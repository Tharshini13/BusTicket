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
    "time":{
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