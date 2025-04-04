import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Buslist.css";
import bedsheet from "../assets/bed-sheets.png"
import light from "../assets/light.png"
import pillow from "../assets/pillow.png"
import charge from "../assets/charge.png"
import { busStore } from "../StateManagement/bus.store";
import { Link } from "react-router-dom";


const Buslist = () => {
  let { busInfo } = busStore();
  let data = busInfo?.busdata || [];

  return (
    <div className="container mt-4">
      <div className="row">
        {data.map((d) => (
          <div key={d._id} className="col-md-4">
            <div className="bus-card" style={{position:"relative",bottom:"500px",background:"#FBF8EF"}}>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="bus-title">{d.travelsname}</h5>
                <span className="bus-rating">{d.rating} ★</span>
              </div>

              <div className="bus-route">
                <div>
                  <h6>{d.starttime}</h6>
                  <p className="text-muted">{d.from}</p>
                </div>
                <div className="bus-duration">{d.totalhours} hrs</div>
                <div>
                  <h6>{d.reachtime}</h6>
                  <p className="text-muted">{d.to}</p>
                </div>
              </div>

              <div className="bus-info">
                <span className="bus-type">{d.type}</span>
                <h6 className="bus-price">₹{d.price}</h6>
              </div>

              <h6 style={{position:"relative",top:"20px"}}>Utilities</h6>

                { d.utilities && <div> 
                  <img style={{height:"20px",position:"relative",bottom:"10px",left:'80px',paddingRight:"15px"}} src={bedsheet} alt="" srcset="" />
                  <img style={{height:"20px",position:"relative",bottom:"10px",left:'80px',paddingRight:"15px"}} src={pillow} alt="" srcset="" />
                  <img style={{height:"20px",position:"relative",bottom:"10px",left:'80px',paddingRight:"15px"}} src={light} alt="" srcset="" />
                  <img style={{height:"20px",position:"relative",bottom:"10px",left:'80px',paddingRight:"15px"}} src={charge} alt="" srcset="" />
                </div> }

              <div className="text-end">
                <Link to={`/singlebus/${d._id}`}>
                  <button className="btn book-btn">Book Ticket</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buslist;

