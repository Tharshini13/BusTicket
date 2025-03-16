import React from 'react'
import img from "../assets/bus.jpg"
import "../Style/Content.css"
import { Link } from 'react-router-dom'

const Content = () => {

  return (
    <div>
      <img id='home_bg' src={img}></img>
      <div>
        <p id='mainhead'>Your Safe Travel Journey <br></br> Is Our Main Goal</p>
        <p id='subhead'>At BlueSky Travels, we prioritize your safety ,<br></br> luxurious seating , air-conditioned cabins ,<br></br> high-quality service at the best prices.</p>
        <Link className="link" to='/bookticket'><button type="button" class="btn bg-primary" id='bt'>Book Now</button></Link>
      </div>
    </div>
  )
}

export default Content
