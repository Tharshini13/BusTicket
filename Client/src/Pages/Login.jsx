import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Login.css"
import eye from "../assets/eye.png"
import mail from "../assets/mail.png"
import { Link } from "react-router-dom";
import {authStore} from "../StateManagement/auth.store"
import logo from "../assets/download.png"
import img from "../assets/login_bg.jpg";

const Login = () => {


  let {loginHandler,message} = authStore()

  console.log(message);
  
  const [password , setPassword] = useState()
  const [email , setEmail] = useState()


  const Submit = (e) => {
    e.preventDefault();
   loginHandler(email,password)

  };

  return ( 
    <div>
      <img src={img} alt="Background" style={{ width: "100%", height: "750px" , position:"relative", bottom:"20px"}} />
      <img src={logo} style={{position:"relative",bottom:"720px",left:"150px",height:"90px",width:"110px"}}></img>
      <div className="container mt-5" >
        <div className="row justify-content-center">
          <div className="col-md-4 login-card" style={{padding:"40px"}}  >

          <small className="text-center text-danger"> <i className={message.status? "text-success":"text-danger"} >{message.msg}</i></small>

          <h2 className="text-center mb-2" style={{color:"white"}}>Login</h2>
          <form  onSubmit={Submit}>

          <div class="input-group mb-3" style={{padding:"30px 0px 0px 0px"}}>
            <input type="email" class="form-control" placeholder="Email" aria-label="Email" onChange={(e) => setEmail(e.target.value)} required></input>
            <span class="input-group-text"><img src={mail} style={{height:"20px"}}></img></span>
          </div>

          <div class="input-group mb-3" style={{padding:"10px 0px 20px 0px"}}>
            <input type="password" class="form-control" placeholder="Password" aria-label="Password" onChange={(e) => setPassword(e.target.value)} required></input>
            <span class="input-group-text"><img src={eye} style={{height:"20px"}}></img></span>
          </div>

          <div className="text-center" style={{ paddingTop: "10px" }}>
            <button className="btn btn-primary" id="signup_btn" type="submit">Sign In</button>
          </div>

          <div className="text-center mt-3">
            <Link to="/signup" className="login-link" style={{color:"white",textDecoration:"none"}}>Not have an account! Sign up!</Link>
          </div>
            
          </form>
          </div>
        </div>
      </div>
    </div>

  )

};

export default Login;