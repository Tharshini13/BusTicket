import React, { useState } from 'react'
import Navbar from './Navbar'
import "../Style/BookTicket.css"
import ticket from "../assets/login_bg.jpg"
import { busStore } from '../StateManagement/bus.store'
import Buslist from './Buslist'
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png"

const BookTicket = () => {


  let {findbus} = busStore()


  let [from,setFrom] = useState();
  let [to,setTo] = useState();
  let [date,setdate] = useState();



  let userData = {
    from,
    to,
    date
  }

let findBus = ()=>{

  findbus(userData)

}


  return (
    <div>
      <Navbar/>
      <img id='tb_bg' src={ticket} ></img>
        <div className='div1'>
            <h1 id='ticketh1'>Online Ticket Booking</h1>
            <div className='divfrom'>
              <label className='l1'>From</label>
              <input id='i1' placeholder='Tenkasi,Chennai' onChange={(e)=>{setFrom(e.target.value)}}></input>
              <label className='l1'>Tamil Nadu</label>
            </div>
            <div className='divto'>
              <label id='l2'>To</label>
              <input id='i2' placeholder='Tenkasi,Chennai' onChange={(e)=>{setTo(e.target.value)}} ></input>
              <label className='l1'>Tamil Nadu</label>
            </div>
            <div className='divdate'>
              <label id='l3'>Travel Date</label>
              <input type="date" id="i3" name="i3" onChange={(e)=>{setdate(e.target.value)}} ></input>
            </div>
        </div>
        
        <button className='search' onClick={findBus}>Search</button>

        <Buslist/>

        <footer className="footer" style={{position:"relative",bottom:"425px"}}>
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
              <img src={insta} style={{height:'30px',position:"relative",top:"35px",right:"150px"}}></img>
              <img src={facebook} style={{height:'30px',position:"relative",top:"35px",right:"150px"}}></img>
              <img src={twitter} style={{height:'30px',position:"relative",top:"35px",right:"150px"}}></img>
              <img src={linkedin} style={{height:'30px',position:"relative",top:"35px",right:"150px"}}></img>
            </div>
          </div>
          <div className="footer-bottom">
            <p style={{position:"relative",right:"40px"}}>&copy; 2025 BlueSky Travels. All rights reserved.</p>
          </div>
        </footer>
      </div>
      

  )
}

export default BookTicket
