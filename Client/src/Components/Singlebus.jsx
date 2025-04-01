import React, { useEffect, useState } from "react";
import "../Style/Singlebus.css";
import { busStore } from "../StateManagement/bus.store";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      .post(`http://localhost:8000/ticket/bookticket/${id}`, {
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
      <h2 className="page-heading" style={{position:"relative",bottom:"30px"}}>Bus Seat Booking</h2>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singlebus;
