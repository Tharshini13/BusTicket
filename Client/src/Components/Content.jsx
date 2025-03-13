import React from 'react'
import img1 from '../assets/a.jpg'

const Content = () => {
  return (
<div style={{ position: "relative", width: "100%", height: "620px" }}>
  <img src={img1} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
  <p style={{color:"red",position:"relative",bottom:"450px",left:"500px",fontSize:'40px',fontWeight:"bold"}}>Enjoy your Dream Vacation</p>
  <p>We always make our customers happy by providing many choices</p>
  <div 
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "black", opacity: 0.7 }} />
  </div>

  )
}

export default Content
