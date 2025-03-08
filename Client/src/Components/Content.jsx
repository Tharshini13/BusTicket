import React from 'react'
import img1 from '../assets/tree.jpg'

const Content = () => {
  return (
<div style={{ position: "relative", width: "100%", height: "620px" }}>
  <img src={img1} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
  <div 
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "black", opacity: 0.6 }} />
  </div>

  )
}

export default Content
