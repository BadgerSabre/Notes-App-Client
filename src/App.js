import React from 'react'
import LoginPage from './components/login/login';
import Home from './components/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
