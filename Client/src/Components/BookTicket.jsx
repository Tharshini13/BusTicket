import React, { useState } from 'react'
import Navbar from './Navbar'
import "../Style/BookTicket.css"
import ticket from "../assets/login_bg.jpg"
import { busStore } from '../StateManagement/bus.store'
import Buslist from './Buslist'

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
      </div>

  )
}

export default BookTicket
