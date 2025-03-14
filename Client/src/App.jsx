import React from 'react'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import { authStore } from './StateManagement/auth.store'
import BookTicket from './Components/BookTicket'
import AddBus from './Pages/AddBus'

const App = () => {


  let {message} = authStore();


  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/login' element={message.status ? <Home /> : <Login/>}></Route>
          <Route path='/bookticket' element={message.status ? <BookTicket /> : <Login/>}></Route>
          <Route path='/addbus' element={<AddBus/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
