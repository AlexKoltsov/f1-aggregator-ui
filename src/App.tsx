import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import NavBar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
    return (
        <>
            <Router>
                <NavBar/>
                <div style={{height: "90vh"}}>
                    <MainContainer/>
                </div>
            </Router>
        </>
    )
}

export default App;
