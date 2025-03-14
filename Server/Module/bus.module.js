let express = require("express");
const { addbus, findbus } = require("../Controller/bus.controller");
const protectedRoute = require("../Middleware/Middleware");


let busRouter  = express.Router();

busRouter.post("/addbus", addbus)


busRouter.post("/findbus", protectedRoute, findbus)

module.exports = busRouter;