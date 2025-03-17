const express = require("express");
const { signup, signin, isAuthCheck, logout } = require("../Controller/auth.controller");

let authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.get("/check", isAuthCheck);
authRouter.post("/logout", logout);

module.exports = authRouter;
