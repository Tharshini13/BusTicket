import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Buslist.css"
import bedsheet from "../assets/bed-sheets.png"
import light from "../assets/light.png"
import pillow from "../assets/pillow.png"
import charge from "../assets/charge.png"
import { busStore } from '../StateManagement/bus.store';


const Buslist = () => {


  return (
    <div>
        <div class="card">
        <div class="card-body">

            <h5 class="card-title">SRS Travels</h5>

            <h5 style={{position:"relative",left:"400px",bottom:"30px"}}> 07.30<h6>16Mar </h6></h5>
            <hr style={{width:"50px",position:"relative",bottom:"63px",left:"480px"}}></hr>
            <h6 style={{position:"relative",bottom:"93px",left:"560px"}}> 06hrs 1min </h6>
            <hr style={{width:"50px",position:"relative",bottom:"117px",left:"680px"}}></hr>
            <h5 style={{position:"relative",left:"760px",bottom:"158px"}}> 13:40<h6>16Mar </h6></h5>

            <button type="button" class="btn btn-success" style={{position:"relative",left:"900px",bottom:"205px",height:"35px"}}> *4.4</button>

            <h5 style={{position:"relative",left:"1250px",bottom:"235px"}}>$1,000</h5>

            <h6 style={{position:"relative",bottom:"230px"}}>A/C Sleeper</h6>

            <h6 style={{position:"relative",bottom:"240px",left:"395px"}}>chennai</h6>

            <h6 style={{position:"relative",bottom:"269px",left:"750px"}}>Bangalore</h6>

            <h6 style={{position:"relative",bottom:"265px"}}>Utilities</h6>

            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" title="Bedsheet" style={{borderStyle:"none",background:'white',position:"relative",bottom:"300px",left:"70px"}}><img style={{height:"20px"}} src={bedsheet}></img></button>
            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" title="pillow" style={{borderStyle:"none",background:'white',position:"relative",bottom:"300px",left:"70px"}}><img style={{height:"20px"}} src={pillow}></img></button>
            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" title="light" style={{borderStyle:"none",background:'white',position:"relative",bottom:"300px",left:"70px"}}><img style={{height:"20px"}} src={light}></img></button>
            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" title="charge" style={{borderStyle:"none",background:'white',position:"relative",bottom:"300px",left:"70px"}}><img style={{height:"20px"}} src={charge}></img></button>

            <button type="button" class="btn btn-danger" id='ticketbook' >Book ticket</button>



        </div>
        </div>
    </div>
  )
}

export default Buslist
