import "../Style/Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Buslogo from "../assets/download.png";
import { authStore } from "../StateManagement/auth.store";

const Navbar = () => {
    let { message, logoutHandler } = authStore();

    return (
        <div id="nav" style={{ position: "relative", top: "4px" }}>
            <div id="Nav">
                <img id="img_buslogo" src={Buslogo} alt="Bus Logo" />
                <p id="head">BlueSky Travels</p>
                <Link className="link" to="/home">
                    <button type="button" className="btn">Home</button>
                </Link>
                <Link className="link" to="/bookticket">
                    <button type="button" className="btn">Book Ticket</button>
                </Link>

                {/* Always show Sign In and Logout buttons */}
                <Link className="link" to="/login">
                    <button
                        type="button" 
                        className="btn btn-primary" 
                        id="btn" 
                        disabled={message.status}  // Disable if user is logged in
                    >
                        Sign In
                    </button>
                </Link>

                <button  style={{position:"relative",bottom:"145px",left:"1000px"}}
                    type="button" 
                    className="btn btn-danger" 
                    id="btn" 
                    onClick={logoutHandler} 
                    disabled={!message.status}  // Disable if user is NOT logged in
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Navbar;
