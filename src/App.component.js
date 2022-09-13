import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home.component';
import Login from './components/login.component';
import Signup from './components/signup.component';


class App extends Component {
    render() { 
        return (
            <div>
                <Link to="/home">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </div>
        );
    }
}
 
export default App;