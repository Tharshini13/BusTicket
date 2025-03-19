import React, { useEffect } from 'react';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import { authStore } from './StateManagement/auth.store';
import BookTicket from './Components/BookTicket';
import AddBus from './Pages/AddBus';
import Singlebus from './Components/Singlebus';

const App = () => {
    let { message, checkAuth } = authStore();

    useEffect(() => {
        checkAuth(); // Runs when the app loads to check authentication
    }, []);

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/login' element={message.status ? <Home /> : <Login />} />
                    <Route path='/bookticket' element={message.status ? <BookTicket /> : <Login />} />
                    <Route path='/addbus' element={<AddBus />} />
                    <Route path='/singlebus/:id' element={<Singlebus />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
