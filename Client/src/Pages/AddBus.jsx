import React, { useState } from "react";
import axios from "axios";
import "../Style/AddBus.css";
import img from "../assets/bus_bg.jpg";
import Navbar from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { busStore } from "../StateManagement/bus.store";

const AddBus = () => {
  let { addBus } = busStore();
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    startingTime: "",
    reachingTime: "",
    travelsName: "",
    startingDate: "",
    reachingDate: "",
    totalHours: "",
    type: "",
    utilities: "false",
    price: "",
    rating: "",
    seats: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = (e) => {
    setFormData({ ...formData, utilities: e.target.checked ? "true" : "false" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addBus(formData);
  };

  return (
    <div>
      <Navbar />
      <div>
        <img id="addbus_bg" src={img} alt="Bus Background" />
      </div>

      <p id="addpara">Add Bus</p>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 addbus-card" style={{ padding: "40px" }}>
            <form onSubmit={handleSubmit} style={{ paddingLeft: "20px", paddingRight: "20px",position:"relative",bottom:"90px" }}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label text-white fs-5">From</label>
                  <input type="text" name="from" value={formData.from} onChange={handleChange} className="form-control" />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label text-white fs-5">To</label>
                  <input type="text" name="to" value={formData.to} onChange={handleChange} className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label text-white fs-5">Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label text-white fs-5">Starting Time</label>
                  <input type="time" name="startingTime" value={formData.startingTime} onChange={handleChange} className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label text-white fs-5">Reaching Time</label>
                  <input type="time" name="reachingTime" value={formData.reachingTime} onChange={handleChange} className="form-control" />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label text-white fs-5">Travels Name</label>
                  <input type="text" name="travelsName" value={formData.travelsName} onChange={handleChange} className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label text-white fs-5">Starting Date</label>
                  <input type="date" name="startingDate" value={formData.startingDate} onChange={handleChange} className="form-control" />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label text-white fs-5">Reaching Date</label>
                  <input type="date" name="reachingDate" value={formData.reachingDate} onChange={handleChange} className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label text-white fs-5">Total Hours</label>
                  <input type="text" name="totalHours" value={formData.totalHours} onChange={handleChange} className="form-control" />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label text-white fs-5">Type</label>
                  <select name="type" value={formData.type} onChange={handleChange} className="form-control">
                    <option value="">Select Type</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="sleeper">Sleeper</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label text-white fs-5">Utilities</label>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" name="utilities" checked={formData.utilities === "true"} onChange={handleToggle} />
                    <label className="form-check-label text-white">{formData.utilities === "true" ? "Yes" : "No"}</label>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label text-white fs-5">Price</label>
                  <input type="text" name="price" value={formData.price} onChange={handleChange} className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label text-white fs-5">Rating</label>
                  <input type="text" name="rating" value={formData.rating} onChange={handleChange} className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label text-white fs-5">Seats</label>
                  <input type="number" name="seats" value={formData.seats} onChange={handleChange} className="form-control" />
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary" style={{ width: "200px" }}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBus;
