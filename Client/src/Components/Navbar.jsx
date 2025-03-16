import "../Style/Navbar.css"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Buslogo from '../assets/download.png';
import { authStore } from "../StateManagement/auth.store";


const Navbar = () => {
let {message} = authStore();

console.log(message.status);


  return (
    <div id="nav" style={{position:"relative",top:"10px"}}>
      <div id="Nav">
        <img id="img_buslogo" src={Buslogo}></img>
        <p id="head">BlueSky Travels</p>
        <Link className="link"  to="/home"><button type="button" class="btn">Home</button></Link>
        <Link className="link" to='/bookticket'><button type="button" class="btn"  >Book Ticket</button></Link>
        <Link className="link" to=''><button type="button" class="btn">Download Ticket</button></Link>
        <Link className="link" to="/login"><button type="button" className="btn btn-primary" id="btn">Sign In</button></Link>
      </div>

      <div class="navM">
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid" id="navM">
    <img src={Buslogo} id="img_buslogo"></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Book Ticket</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Payment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Download Ticket</a>
        </li>
        <Link className="link" to="/Signup"><button type="button" class="btn">Sign Up</button></Link>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>

    </div>
  )
}

export default Navbar;