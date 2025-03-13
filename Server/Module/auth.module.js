let express = require("express");
const { signup, signin } = require("../Controller/auth.controller");


let authRouter = express.Router();


authRouter.post("/signup",signup)

authRouter.post("/signin", signin)


module.exports = authRouter;