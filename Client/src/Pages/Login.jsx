import { authStore } from "../StateManagement/auth.store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate
import eye from "../assets/eye.png";
import mail from "../assets/mail.png";
import { Link } from "react-router-dom";
import "../Style/Login.css";
import logo from "../assets/download.png";
import img from "../assets/login_bg.jpg";

export const Login = () => {
  const loginHandler = authStore((state) => state.loginHandler); // ✅ Zustand store correctly accessed
  const message = authStore((state) => state.message); // ✅ Correctly retrieve message state

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();  // ✅ Initialize useNavigate

  const Submit = (e) => {
    e.preventDefault();
    loginHandler(email, password, navigate);  // ✅ Pass navigate to loginHandler
  };

  return (
    <div>
      <img src={img} alt="Background" style={{ width: "100%", height: "750px", position: "relative", bottom: "20px" }} />
      <img src={logo} style={{ position: "relative", bottom: "720px", left: "150px", height: "90px", width: "110px" }} />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 login-card" style={{ padding: "40px" }}>

            {/* ✅ Display success/error message */}
            {message.msg && (
              <small className={`text-center ${message.status ? "text-success" : "text-danger"}`}>
                <i>{message.msg}</i>
              </small>
            )}

            <h2 className="text-center mb-2" style={{ color: "white" }}>Login</h2>
            <form onSubmit={Submit}>
              <div className="input-group mb-3" style={{ padding: "30px 0px 0px 0px" }}>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  value={email}  // ✅ Controlled input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="input-group-text"><img src={mail} style={{ height: "20px" }} /></span>
              </div>

              <div className="input-group mb-3" style={{ padding: "10px 0px 20px 0px" }}>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  value={password}  // ✅ Controlled input
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="input-group-text"><img src={eye} style={{ height: "20px" }} /></span>
              </div>

              <div className="text-center" style={{ paddingTop: "10px" }}>
                <button className="btn btn-primary" id="signup_btn" type="submit">Sign In</button>
              </div>

              <div className="text-center mt-3">
                <Link to="/signup" className="login-link" style={{ color: "white", textDecoration: "none" }}>
                  Not have an account? Sign up!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
