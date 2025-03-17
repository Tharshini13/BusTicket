const jwt = require("jsonwebtoken");
const signupModel = require("../Model/signup.model");
const generateToken = require("../lib/generateToken");
let  bcrypt = require("bcrypt")


module.exports = {
    signup: async (req, res) => {
        let { username, password, email } = req.body;
        let hashedPassword = await bcrypt.hash(password, 10);

        let exist = await signupModel.findOne({ email: email });

        if (exist) {
            return res.status(400).json({ status: false, msg: "Email Already Registered!" });
        }

        signupModel
            .create({ username, password: hashedPassword, email })
            .then(() => {
                res.json({ status: true, msg: "Account Created!" });
            })
            .catch((e) => {
                res.status(500).json({ status: false, msg: "Error Occurred in Signup Controller" });
            });
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

            const token = await generateToken(exist.username);

            // Set JWT in HTTP-only cookie
            res.cookie("authToken", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Strict",
                maxAge: 5 * 60 * 60 * 1000, // 5 hours
            });

            return res.json({ status: true, msg: "Login Successful!", user: { username: exist.username, email: exist.email } });
        } catch (error) {
            console.error("Error in Signin Controller:", error);
            res.status(500).send("Internal Server Error");
        }
    },

    isAuthCheck: async (req, res) => {
        try {
            const token = req.cookies.authToken;
            if (!token) {
                return res.json({ status: false, msg: "Not Authenticated" });
            }

            const decoded = jwt.verify(token, process.env.JWTSECRETKEY);
            if (!decoded) {
                return res.json({ status: false, msg: "Invalid Token" });
            }

            const user = await signupModel.findOne({ username: decoded.username });
            if (!user) {
                return res.json({ status: false, msg: "User Not Found" });
            }

            return res.json({ status: true, user: { username: user.username, email: user.email } });
        } catch (error) {
            console.error("Auth Check Error:", error);
            res.status(500).json({ status: false, msg: "Server Error" });
        }
    },

    logout: (req, res) => {
        res.clearCookie("authToken");
        res.json({ status: true, msg: "Logged out successfully" });
    },
};
