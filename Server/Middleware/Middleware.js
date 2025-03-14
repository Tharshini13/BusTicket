let jwt = require("jsonwebtoken")

function protectedRoute(req,res,next) {


     let token = req.cookies.authToken;

     console.log(token);
     
    

    // const authHeader = req.headers.authorization;
    // console.log(authHeader);

    // const token = authHeader.replace("Bearer ", "");
    // req.token = token;
    next()
    


     
     



    


 
    

    
}
 
module.exports =  protectedRoute;