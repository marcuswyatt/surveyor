import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";

import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";

import CoordinateState from "./context/coordinates/CoordinateState";

import './App.css';
import AlertState from "./context/alert/AlertState";


function App() {
  return (
    <CoordinateState>
        <AlertState>
            <BrowserRouter>
                <div className='App'>
                    <Navbar />
                    <div className='container'>
                        <Alert />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </AlertState>
    </CoordinateState>
  );
}

export default App;
