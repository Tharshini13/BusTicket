let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

const signupModel = require("../Model/signup.model");
const generateToken = require("../lib/generateToken");


module.exports = {

    signup: async (req,res)=>{

        let {username,password,email} = req.body

        let hashedPassword =  await bcrypt.hash(password,10)

       
        

        // Checking Mail Already Exisit In DB
        let exist = await signupModel.findOne({email:email});

        if (exist) {
            
            res.send("Email Already Registered!")
        
        }

        else{

            signupModel.create({username:username,password:hashedPassword,email:email})
            .then(()=>{
                res.send("Account Created!")
            })
            .catch((e)=>{
                res.send("Error Occured signup Controller")
            })

        }
    },

    signin:async(req,res) =>{

        try {

            let {email,password} = req.body;

            let exist = await signupModel.findOne({email});
            console.log(exist);
    
    
            if(!exist ){
                return res.json({
                    status:false,
                    "msg":"Invalid Email"  
                  })
             }
    
              let verification =   await bcrypt.compare(password,exist.password);
    
            if(verification){

                let {username} = exist

               
    
                return res.json({
                  status:true,
                  "msg":"Login Done!" ,
                  token: await generateToken(username)

                })
            }
            else{
                return res.json({
                    status:false,
                    "msg":"Login Failled!"  
                  })
            }       
    




            
        } catch (error) {

            res.send("Error Occured in Signin Controller");
            console.log("Error Occured in Signin Controller");
            
            
        }

       
    }

}