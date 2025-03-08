let mongoose = require("mongoose")
let dotenv = require("dotenv")

dotenv.config()

    let connectDB = (req,res)=>{

        mongoose.connect(process.env.MONGODBURI)
        .then(()=>{
            console.log("DataBase Connected with Server");
        })
        .catch(()=>{
            console.log("Database Failled to Connect Server");
        })
        
    }


module.exports = connectDB;