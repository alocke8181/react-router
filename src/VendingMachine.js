import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Snack from "./Snack";
import Home from "./Home";

const VendingMachine = () =>{

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/soda" element={<Snack name={'Soda'} video={'https://www.youtube.com/embed/BwK9ptLvwmo?si=TUd5bN9c6Fp51TrE'}/>} />
                <Route path="/hamburger" element={<Snack name={'Hamburger'} video={'https://www.youtube.com/embed/gu9CEvEc4E0?si=AF7aahbsEHwYj4BM'}/>}/>
                <Route path="/soup" element={<Snack name={'Soup'} video={'https://www.youtube.com/embed/gkXzeZ0KE5Q?si=-LUaWOESKVCxl4XZ'}/>}/>
            </Routes>
            
        </BrowserRouter>
    )


}

export default VendingMachine;