import React from 'react'
import "../Style/AddBus.css"
import img from "../assets/login_bg.jpg"
import Navbar from '../Components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";

const AddBus = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <img id='addbus_bg' src={img} ></img>
      </div>

      <p id='addpara'>Add Bus</p>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 addbus1-card" style={{padding:"40px"}}  >

              <form>

                <div className="input-group mb-3" style={{padding:"5px"}}>
                  <input type="text" className="form-control" placeholder="From"/>
                </div>

                <div className="input-group mb-3" style={{padding:"5px"}}>
                  <input type="text" className="form-control" placeholder="To"/>
                </div>

                <div className="input-group mb-3" style={{padding:"5px"}}>
                  <input type="date" className="form-control" placeholder="Date"/>
                </div>

                <div className="input-group mb-3" style={{padding:"5px"}}>
                  <input type="text" className="form-control" placeholder="Travels Name"/>
                </div>

              </form>
            </div>
          </div>
        </div>

        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 addbus2-card" style={{padding:"40px"}}  >

              <form>

                <div className="input-group mb-3" style={{ padding:"5px"}}>
                  <input type="text" className="form-control" placeholder="Utilities"/>
                </div>

                <div className="input-group mb-3" style={{padding:"5px"}}>
                  <input type="text" className="form-control" placeholder="Type"/>
                </div>

                <div className="input-group mb-3"  style={{padding:"5px"}}>
                  <input type="text" className="form-control" placeholder="Price"/>
                </div>

                <div className="input-group mb-3"  style={{padding:"5px"}}>
                  <input type="text" className="form-control" placeholder="Rating"/>
                </div>

              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddBus
