let express = require("express");
const { addbus } = require("../Controller/bus.controller");

let busRouter  = express.Router();

busRouter.post("/addbus",addbus)




module.exports = busRouter;