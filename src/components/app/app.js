import React from "react";
import MenuPage from "../menu-page";
import './app.css';
import ItemPage from "../item-page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {

    return (
        <Router>
            <div className="container">
            <MenuPage />
                <Routes> 
                    <>
                    <Route path="/dogs" element={<ItemPage />}></Route>
                    </>
                </Routes>
               
            </div>
        </Router>
    )
}

export default App;

