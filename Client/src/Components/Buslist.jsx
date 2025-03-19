import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Buslist.css"
import bedsheet from "../assets/bed-sheets.png"
import light from "../assets/light.png"
import pillow from "../assets/pillow.png"
import charge from "../assets/charge.png"
import { busStore } from "../StateManagement/bus.store"; 
import { Link } from 'react-router-dom';


const Buslist = () => {

  let {findbus,busInfo} = busStore();

  let data = busInfo?.busdata || [];



  return(
    <div>
      {data.map((d)=>{
        return(


    <div>
        <div class="card">
        <div class="card-body">

            <h5 class="card-title">{d.travelsname}</h5>

            <h5 style={{position:"relative",left:"400px",bottom:"30px"}}> {d.starttime}<h6>{d.startdate} </h6></h5>
            <hr style={{width:"50px",position:"relative",bottom:"63px",left:"480px"}}></hr>
            <h6 style={{position:"relative",bottom:"93px",left:"560px"}}> {d.totalhours} </h6>
            <hr style={{width:"50px",position:"relative",bottom:"117px",left:"680px"}}></hr>
            <h5 style={{position:"relative",left:"760px",bottom:"158px"}}>{d.reachtime}<h6>{d.reachdate} </h6></h5>

            <button type="button" class="btn btn-success" style={{position:"relative",left:"900px",bottom:"205px",height:"35px"}}> {d.rating}</button>

            <h5 style={{position:"relative",left:"1250px",bottom:"235px"}}>{d.price}</h5>


            <h6 style={{position:"relative",bottom:"230px"}}>{d.type}</h6>

            <h6 style={{position:"relative",bottom:"240px",left:"395px"}}>{d.from}</h6>

            <h6 style={{position:"relative",bottom:"269px",left:"750px"}}>{d.to}</h6>

            <Link to={`/singlebus/${d._id}`} ><button type="button" class="btn btn-danger" id='ticketbook' style={{position:'relative',left:"90%"}}>Book ticket</button></Link> 
 

            <h6 style={{position:"relative",bottom:"290px"}}>Utilities</h6>

            { d.utilities && <div> 
              <img style={{height:"20px",position:"relative",bottom:"320px",left:'80px',paddingRight:"15px"}} src={bedsheet} alt="" srcset="" />
              <img style={{height:"20px",position:"relative",bottom:"320px",left:'80px',paddingRight:"15px"}} src={pillow} alt="" srcset="" />
              <img style={{height:"20px",position:"relative",bottom:"320px",left:'80px',paddingRight:"15px"}} src={light} alt="" srcset="" />
              <img style={{height:"20px",position:"relative",bottom:"320px",left:'80px',paddingRight:"15px"}} src={charge} alt="" srcset="" />
            </div> }


        </div>
        </div>
    </div>
        )
      })}
    </div>
  )

}

export default Buslist
