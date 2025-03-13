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

    signin: async (req, res) => {
        try {
            const { email, password } = req.body;
    
            const exist = await signupModel.findOne({ email });
            if (!exist) {
                return res.json({ status: false, msg: "Invalid Email" });
            }
    
            const verification = await bcrypt.compare(password, exist.password);
            if (!verification) {
                return res.json({ status: false, msg: "Invalid Password" });
            }
    
            // Wait for token generation
            const token = await generateToken(exist.username);
    
            // Set JWT in HTTP-only cookie
            res.cookie("authToken", token, {
                httpOnly: true, 
                secure: process.env.NODE_ENV === "production", 
                sameSite: "Strict", 
                maxAge: 5 * 60 * 60 * 1000 // 5 hours
            });
    
            return res.json({ status: true, msg: "Login Successful!" });
        } catch (error) {
            console.error("Error in Signin Controller:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    // router.post("/logout", (req, res) => {
    //     res.clearCookie("authToken");
    //     res.json({ status: true, msg: "Logged out successfully" });
    // });
    
    
    

       
    

}