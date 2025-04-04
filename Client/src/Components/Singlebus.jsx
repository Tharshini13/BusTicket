import React, { useEffect, useState } from "react";
import "../Style/Singlebus.css";
import { busStore } from "../StateManagement/bus.store";
import { useParams } from "react-router-dom";
import axios from "axios";
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";  
import linkedin from "../assets/linkedin.png";

import Payment from "../Components/Payment.jsx"
import { apiEndpoint } from "../Data.js";

const Singlebus = () => {
  let { singleBus, bus } = busStore();
  let { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatStatus, setSeatStatus] = useState({});
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [seats, setSeats] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    axios
      .post(`${apiEndpoint}/ticket/bookticket/${id}`, {
        username: username,
        email: email,
        phonenumber: phonenumber,
        seats: selectedSeats
      })
      .then((res) => {
        console.log(res.data);
  
        // Reset form fields
        setUsername("");
        setemail("");
        setPhonenumber("");
        setSelectedSeats([]);
  
        // Refresh seat availability
        singleBus(id);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

  useEffect(() => {
    singleBus(id);
  }, [id]);

  useEffect(() => {
    if (bus && bus.seats) {
      const seatMap = bus.seats.reduce((acc, seat) => {
        acc[seat.seatNo] = seat.status;
        return acc;
      }, {});
      setSeatStatus(seatMap);
    }
  }, [bus]);

  const handleSeatSelection = (seatNo) => {
    if (!seatStatus[seatNo]) return;
    setSelectedSeats((prev) =>
      prev.includes(seatNo) ? prev.filter((s) => s !== seatNo) : [...prev, seatNo]
    );
  };

  return (
    <div className="sb">
      <h2 className="page-heading" style={{position:"relative"}}>Bus Seat Booking</h2>
      <div className="layout-container">

        <div className="bus-container">
          {bus && bus.type === "sleeper" && (
            <>
              <h6 id="h6">Lower Deck</h6>
              <div className="seat-row">
                {bus.seats
                  .filter((seat) => seat.seatNo <= 25)
                  .map((seat) => (
                    <button
                      id="btn1"
                      key={seat.seatNo}
                      disabled={!seatStatus[seat.seatNo]}
                      className={selectedSeats.includes(seat.seatNo) ? "selected" : ""}
                      onClick={() => handleSeatSelection(seat.seatNo)}
                    >
                      {seat.seatNo}
                    </button>
                  ))}
              </div>

              <h6 id="h6">Upper Deck</h6>
              <div className="seat-row">
                {bus.seats
                  .filter((seat) => seat.seatNo > 25)
                  .map((seat) => (
                    <button
                      id="btn1"
                      key={seat.seatNo}
                      disabled={!seatStatus[seat.seatNo]}
                      className={selectedSeats.includes(seat.seatNo) ? "selected" : ""}
                      onClick={() => handleSeatSelection(seat.seatNo)}
                    >
                      {seat.seatNo}
                    </button>
                  ))}
              </div>
            </>
          )}
        </div>

        {/* Booking Form */}
        <div className="login-container">
          <h3 className="text-center" style={{position:"relative",top:"20px"}}>Contact Information</h3>
          <form className="form" onSubmit={submit}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Full Name" onChange={(e) => setUsername(e.target.value)} value={username}  required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" onChange={(e) => setemail(e.target.value)} value={email} required />
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" placeholder="Phone Number" onChange={(e) => setPhonenumber(e.target.value)} value={phonenumber} required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Selected Seats" value={selectedSeats.join(", ")} readOnly />
            </div>
            <button type="submit" className="btnpay" disabled={loading}>
              {loading ? "Processing..." : "PAY & BOOK NOW"}
            </button>
            <div className="payment mt-3 ms-5" >
            <Payment />
            </div>
           
          </form>
        </div>
      
      </div>

     

      {/* Footer */}
      <footer className="footer" style={{position: "relative",top:"100px"}}>
        <div className="footer-top">
          <div className="footer-logo">
            <h3>BlueSky Travels</h3>
            <p>Your journey begins here.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <img id="insta" src={insta} style={{height: '30px', position: "relative", top: "35px", right: "150px"}} alt="Instagram" />
            <img src={facebook} style={{height: '30px', position: "relative", top: "35px", right: "150px"}} alt="Facebook" />
            <img id="twitter" src={twitter} style={{height: '30px', position: "relative", top: "35px", right: "150px"}} alt="Twitter" />
            <img src={linkedin} style={{height: '30px', position: "relative", top: "35px", right: "150px"}} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-bottom">
          <p style={{position: "relative", right: "40px"}}>&copy; 2025 BlueSky Travels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Singlebus;
