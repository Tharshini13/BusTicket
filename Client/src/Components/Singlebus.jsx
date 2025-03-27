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

  const [username , setUsername] = useState("");
  const [email , setemail] = useState("");
  const [phonenumber , setPhonenumber] = useState("");
  const [seats , setSeats] = useState("");

    const submit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:8000/ticket/bookticket", {
          username: username,
          email: email,
          phonenumber:phonenumber,
          seats:seats
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

  useEffect(() => {
    singleBus(id);
  }, [id]);

  useEffect(() => {
    if (bus && bus.seats) {
      // Initialize seat status from backend data
      const seatMap = bus.seats.reduce((acc, seat) => {
        acc[seat.seatNo] = seat.status; // true (available) or false (booked)
        return acc;
      }, {});
      setSeatStatus(seatMap);
    }
  }, [bus]);

  // Handle seat selection
  const handleSeatSelection = (seatNo) => {
    if (!seatStatus[seatNo]) return; // Ignore already booked seats

    setSelectedSeats((prev) =>
      prev.includes(seatNo) ? prev.filter((s) => s !== seatNo) : [...prev, seatNo]
    );
  };

  // Handle booking (update seat status in backend)
  const handleBooking = async (event) => {
    event.preventDefault();
    if (selectedSeats.length === 0) return alert("Please select at least one seat!");

    setLoading(true);

    try {
      // Send request to update selected seats
      const response = await axios.patch(`http://localhost:5000/api/buses/${id}/seats`, {
        seats: selectedSeats, // Send selected seat numbers
        status: false, // Mark as booked
      });

      if (response.status === 200) {
        // Update local state to reflect booking
        setSeatStatus((prev) => {
          const updatedStatus = { ...prev };
          selectedSeats.forEach((seatNo) => (updatedStatus[seatNo] = false));
          return updatedStatus;
        });
        setSelectedSeats([]); // Clear selection after booking
      }
    } catch (error) {
      console.error("Error booking seats:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sb" style={{ background: "#D9DFC6" }}>
      <div className="bus-container">

        {bus &&
          bus.type === "deluxe" &&
          bus.seats.map((seat) => (
            <button
              id="btn1"
              key={seat.seatNo}
              disabled={!seatStatus[seat.seatNo]} // Disable booked seats
              className={selectedSeats.includes(seat.seatNo) ? "selected" : ""}
              onClick={() => handleSeatSelection(seat.seatNo)}
            >
              {seat.seatNo}
            </button>
          ))}

{bus && bus.type === "sleeper" && (
  <>
    <h6 style={{fontSize:"30px",textAlign:"center"}}>Lower Deck</h6>
    <div className="seat-row">
      {bus.seats
        .filter((seat) => seat.seatNo <= 25)
        .map((seat) => (
          <button
            id="btn1"
            key={seat.seatNo}
            disabled={!seatStatus[seat.seatNo]} // Disable booked seats
            className={selectedSeats.includes(seat.seatNo) ? "selected" : ""}
            onClick={() => handleSeatSelection(seat.seatNo)}
          >
            {seat.seatNo}
          </button>
        ))}
    </div>

    <h6 style={{fontSize:"30px",textAlign:"center"}}>Upper Deck</h6>
    <div className="seat-row">
      {bus.seats
        .filter((seat) => seat.seatNo > 25)
        .map((seat) => (
          <button
            id="btn1"
            key={seat.seatNo}
            disabled={!seatStatus[seat.seatNo]} // Disable booked seats
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

      

      <div className="login-container">
        <h3 className="text-center">Contact Information</h3>
        <form className="form" onSubmit={handleBooking}>
          <div className="mb-3" style={{ paddingBottom: "10px" }}>
            <input type="text" className="form-control" id="name" placeholder="Enter your full name" onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="mb-3" style={{ paddingBottom: "10px" }}>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e) => setemail(e.target.value)} required />
          </div>
          <div className="mb-3" style={{ paddingBottom: "10px" }}>
            <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" onChange={(e) => setPhonenumber(e.target.value)} required />
          </div>
          <div className="mb-3" style={{ paddingBottom: "10px" }}>
            <input
              type="text"
              className="form-control"
              id="selectedSeats"
              placeholder="Selected Seats"
              value={selectedSeats.join(", ")}
              readOnly
              onChange={(e) => setSeats(e.target.value)}
            />
          </div>
          <button type="submit" onClick={submit} className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Processing..." : "PAY & BOOK NOW"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Singlebus;
