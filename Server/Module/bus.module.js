let express = require("express");
const { addbus, findbus } = require("../Controller/bus.controller");

let busRouter  = express.Router();

busRouter.post("/addbus",addbus)


busRouter.post("/findbus",findbus)

module.exports = busRouter;