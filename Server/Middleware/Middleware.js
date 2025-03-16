const jwt = require("jsonwebtoken");

function protectedRoute(req, res, next) {

    let token = req.cookies?.authToken;

    if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWTSECRETKEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res.status(403).json({ message: "Invalid Token" });
    }
}

module.exports = protectedRoute;
