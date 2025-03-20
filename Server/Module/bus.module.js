let express = require("express");
const { addbus, findbus, findSingleBus } = require("../Controller/bus.controller");
const protectedRoute = require("../Middleware/Middleware");


let busRouter  = express.Router();

busRouter.post("/addbus", addbus)


busRouter.post("/findbus", protectedRoute, findbus);
busRouter.get("/singlebus/:id",findSingleBus)

module.exports = busRouter;