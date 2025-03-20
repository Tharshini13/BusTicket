import React, { useEffect } from 'react'
import "../Style/Singlebus.css"
import { busStore } from '../StateManagement/bus.store';
import { useParams } from 'react-router-dom';

const Singlebus = () => {

   let {singleBus,bus} = busStore()
  let {id} =  useParams()

  
  

useEffect(()=>{

singleBus(id)



},[id])


console.log(bus);




  return (
    <div style={{background:"#D9DFC6"}}>

      <div class="bus-container">
          <h4 style={{textAlign:"center"}}>Lower Deck</h4>
          <div class="deck">
              <div class="seat-grid">
                  <div class="seat-row">
                    <button className='seat_btn'>1</button>
                    <button className='seat_btn'>2</button>
                    <button className='seat_btn'>3</button>
                    <button className='seat_btn'>4</button>
                    <button className='seat_btn'>5</button>
                    <button className='seat_btn'>6</button>
                  </div>
                  <div class="seat-row">
                    <button className='seat_btn'>7</button>
                    <button className='seat_btn'>8</button>
                    <button className='seat_btn'>9</button>
                    <button className='seat_btn'>10</button>
                    <button className='seat_btn'>11</button>
                    <button className='seat_btn'>12</button>
                  </div>
                  <div class="seat-row" style={{position:"relative",top:'20px'}}>
                    <button className='seat_btn'>13</button>
                    <button className='seat_btn'>14</button>
                    <button className='seat_btn'>15</button>
                    <button className='seat_btn'>16</button>
                    <button className='seat_btn'>17</button>
                    <button className='seat_btn'>18</button>
                  </div>
              </div>
          </div>

          <h4 style={{textAlign:"center"}}>Upper Deck</h4>
          <div class="deck">
              <div class="seat-grid">
              <div class="seat-row">
                    <button className='seat_btn'>1</button>
                    <button className='seat_btn'>2</button>
                    <button className='seat_btn'>3</button>
                    <button className='seat_btn'>4</button>
                    <button className='seat_btn'>5</button>
                    <button className='seat_btn'>6</button>
                  </div>
                  <div class="seat-row">
                    <button className='seat_btn'>7</button>
                    <button className='seat_btn'>8</button>
                    <button className='seat_btn'>9</button>
                    <button className='seat_btn'>10</button>
                    <button className='seat_btn'>11</button>
                    <button className='seat_btn'>12</button>
                  </div>
                  <div class="seat-row" style={{position:"relative",top:'20px'}}>
                    <button className='seat_btn'>13</button>
                    <button className='seat_btn'>14</button>
                    <button className='seat_btn'>15</button>
                    <button className='seat_btn'>16</button>
                    <button className='seat_btn'>17</button>
                    <button className='seat_btn'>18</button>
                  </div>
              </div>
          </div>
      </div>

      <div class="login-container">

      <h3 class="text-center">Contact Information</h3>

        <form className='form'>

        <div class="mb-3" style={{paddingBottom:'10px'}}> 
            <input type="text" class="form-control" id="name" placeholder="Enter your full name"></input>
        </div>
        <div class="mb-3" style={{paddingBottom:'10px'}}>
            <input type="email" class="form-control" id="email" placeholder="Enter your email"></input>
        </div>
        <div class="mb-3" style={{paddingBottom:'10px'}}>
            <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number"></input>
        </div>

        <button type="submit" class="btn btn-primary w-100" style={{paddingBottom:'10px'}}>PAY & BOOK NOW</button>

        </form>
      </div>
      
    </div>
  )
}

export default Singlebus
