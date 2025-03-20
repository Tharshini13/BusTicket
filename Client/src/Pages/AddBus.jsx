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
          <div className="col-md-4 addbus1-card" style={{padding:"40px"}}   >

              <form style={{paddingLeft:"20px",paddingRight:"20px"}}>

              <div class="mb-3">
                <label class="form-label" style={{color:"white",fontSize:"18px"}}>From</label>
                <input type="text" style={{height:"35px"}} class="form-control"/>
              </div>

                <div className="mb-3">
                <label class="form-label" style={{color:"white",fontSize:"18px"}}>To</label>
                  <input type="text" style={{height:"35px"}} class="form-control"/>
                </div>

                <div className="mb-3">
                <label class="form-label" style={{color:"white",fontSize:"18px"}}>Date</label>
                  <input type="date" style={{height:"35px"}} class="form-control"/>
                </div>

                <div className="mb-3">
                <label class="form-label" style={{color:"white",fontSize:"18px"}}>Starting Time</label>
                  <input type="text" style={{height:"35px"}} class="form-control"/>
                </div>

                <div className="mb-3">
                <label class="form-label" style={{color:"white",fontSize:"18px"}}>Reaching Time</label>
                  <input type="text" style={{height:"35px"}} class="form-control"/>
                </div>

                <div className="mb-3">
                <label class="form-label" style={{color:"white",fontSize:"18px"}}>Travels Name</label>
                  <input type="text" style={{height:"35px"}} class="form-control"/>
                </div>

              </form>
            </div>
          </div>
        </div>

        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 addbus2-card" style={{padding:"40px"}}  >

              <form>

              <div className="mb-3">
                <label class="form-label" style={{color:"white",fontSize:"18px"}}>Starting Date</label>
                  <input type="text" style={{height:"35px"}} class="form-control"/>
                </div>

                <div className="mb-3">
                <label class="form-label" style={{color:"white",fontSize:"18px"}}>Reaching Date</label>
                  <input type="text" style={{height:"35px"}} class="form-control"/>
                </div>

                <div className="mb-3">
                <label class="form-label" style={{color:"white",fontSize:"18px"}}>Total hours</label>
                  <input type="text" style={{height:"35px"}} class="form-control"/>
                </div>

                <div className="mb-3">
                <label class="form-label" style={{color:"white",fontSize:"18px"}}>Type</label>
                  <input type="text" style={{height:"35px"}} class="form-control"/>
                </div>

              <div className="mb-3">
                <label class="form-label" style={{color:"white",fontSize:"18px"}}>Utilities</label>
                  <input type="text" style={{height:"35px"}} class="form-control"/>
                </div>

                <div className="mb-3">
                <label class="form-label" style={{color:"white",fontSize:"18px"}}>Price</label>
                  <input type="text" style={{height:"35px"}} class="form-control"/>
                </div>

                <div className="mb-3">
                <label class="form-label" style={{color:"white",fontSize:"18px"}}>Rating</label>
                  <input type="text" style={{height:"35px"}} class="form-control"/>
                </div>

              </form>

            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" style={{position:'relative',bottom:"650px",left:'45%',width:'200px'}}>Submit</button>
    </div>
  )
}

export default AddBus
