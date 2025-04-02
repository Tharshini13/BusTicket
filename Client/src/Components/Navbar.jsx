import "../Style/Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Buslogo from "../assets/download.png";
import { authStore } from "../StateManagement/auth.store";

const Navbar = () => {
    let { message, logoutHandler } = authStore();

    return (
        <div id="nav" style={{ position: "relative", top: "4px" }}>
            <div id="Nav">
                <img id="img_buslogo" src={Buslogo} alt="Bus Logo" />
                <p id="head">BlueSky Travels</p>
                <Link className="link" to="/home"><button type="button" className="btn" id="btnhome">Home</button></Link>
                <Link className="link" to="/bookticket"><button type="button" className="btn" id="btnticket">Book Ticket</button></Link>
                <Link className="link" to="/login"><button type="button" className="btn btn-primary" id="btnsignin">Sign In</button></Link>
                <button  style={{position:"relative",bottom:"145px",left:"1000px"}} type="button" className="btn btn-danger" id="btnlogout" onClick={logoutHandler}>Logout</button>
            </div>

            <div className="navM">

            <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <img id="img_buslogo" src={Buslogo} alt="Bus Logo" style={{ height: "80px" }} />
        <a className="navbar-brand " href="#" style={{color:"black"}}>BlueSky Travels</a>
        <button
          className="navbar-toggler bg-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" style={{color:"black"}} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" style={{color:"black"}} to="/bookticket">Book Ticket</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" style={{color:"black"}} to="/login">Sign In</Link>
            </li>
            <li className="nav-item">
            <button type="button" className="btn btn-danger" id="btnlogout" onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      
            </div>


        </div>
    );
}

export default Navbar;
