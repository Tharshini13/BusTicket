import React, { useEffect } from 'react';
import Signup from './Pages/Signup';
import { Login } from './Pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import { authStore } from './StateManagement/auth.store';
import BookTicket from './Components/BookTicket';
import AddBus from './Pages/AddBus';
import Singlebus from './Components/Singlebus';

const App = () => {
    const { message, checkAuth } = authStore();  // This does NOT track state changes
    const isAuthenticated = authStore((state) => state.message.status); // This tracks state updates

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
                    <Route path='/login' element={isAuthenticated ? <Home /> : <Login />} />
                    <Route path='/bookticket' element={isAuthenticated ? <BookTicket /> : <Login />} />
                    <Route path='/addbus' element={isAuthenticated ? <AddBus /> : <Login />} />
                    <Route path='/singlebus/:id' element={<Singlebus />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
