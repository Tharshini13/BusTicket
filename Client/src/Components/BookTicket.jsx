import React from 'react'
import Navbar from './Navbar'
import "../Style/BookTicket.css"
import ticket from "../assets/tree.jpg"

const BookTicket = () => {
  return (
    <div>
      <Navbar/>
      <img id='tb_bg' src={ticket} ></img>
        <div className='div1'>
            <h1 id='ticketh1'>Online Ticket Booking</h1>
            <div className='divfrom'>
              <label className='l1'>From</label>
              <input id='i1' placeholder='Tenkasi,Chennai'></input>
              <label className='l1'>Tamil Nadu</label>
            </div>
            <div className='divto'>
              <label id='l2'>To</label>
              <input id='i2' placeholder='Tenkasi,Chennai'></input>
              <label className='l1'>Tamil Nadu</label>
            </div>
            <div className='divdate'>
              <label id='l3'>Travel Date</label>
              <input type="date" id="i3" name="i3"></input>
            </div>
        </div>
        
        <button className='search'>Search</button>
      </div>

  )
}

export default BookTicket
