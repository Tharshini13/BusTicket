import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/login_bg.jpg";
import "../Style/Signup.css";
import eye from "../assets/eye.png";
import person from "../assets/person.png";
import mail from "../assets/mail.png";
import { Link } from "react-router-dom";
import logo from "../assets/download.png"


const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/auth/signup", {
        username: username,
        password: password,
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        setMsg(res.data);
      })
      .catch((e) => {
        console.log(e);
        setMsg(e.response?.data || "An error occurred");
      });
  };

  return (
    <div>  
      <img src={img} alt="Background" style={{ width: "100%", height: "750px" , position:"relative", bottom:"20px"}} />
      <img src={logo} style={{position:"relative",bottom:"720px",left:"150px",height:"90px",width:"110px"}}></img>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 signup-card" style={{padding:"40px"}}  >

              <small className="text-center text-danger"><i>{msg}</i></small>

              <h2 className="text-center mb-2" style={{color:"white"}} >Sign Up</h2>

              <form onSubmit={Submit}>
                <div className="input-group mb-3" style={{ paddingTop: "30px" }}>
                  <input type="text" className="form-control" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required/>
                  <span className="input-group-text">
                    <img src={person} alt="User Icon" style={{ height: "20px" }} />
                  </span>
                </div>

                <div className="input-group mb-3" style={{ paddingTop: "10px" }}>
                  <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                  <span className="input-group-text">
                    <img src={mail} alt="Email Icon" style={{ height: "20px" }} />
                  </span>
                </div>

                <div className="input-group mb-3"  style={{ paddingTop: "10px" }}>
                  <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                  <span className="input-group-text" onClick={togglePassword} style={{ cursor: "pointer" }}>
                    <img src={eye} alt="Toggle Password" style={{ height: "20px" }} />
                  </span>
                </div>

                <div className="text-center" style={{ paddingTop: "10px" }}>
                  <button className="btn btn-primary" id="signup_btn" type="submit">Sign Up</button>
                </div>

                <div className="text-center mt-3">
                  <Link to="/Login" className="login-link" style={{color:"white",textDecoration:"none"}}>Already have an account? Sign in!</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Signup;
