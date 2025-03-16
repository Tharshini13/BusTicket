let jwt = require("jsonwebtoken")


let   generateToken = async (user)=>{



    let authToken =  await jwt.sign({"username":user},process.env.JWTSECRETKEY,{expiresIn:"5h"})

    return authToken

}

module.exports = generateToken;