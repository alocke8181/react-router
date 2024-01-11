import React from "react";
import {Link } from "react-router-dom";

const Home = () =>{
    return (
            <ul>
                <li>
                    <Link to='/soda'>Soda</Link>
                </li>
                <li>
                    <Link to='/hamburger'>Hamburger</Link>
                </li>
                <li>
                    <Link to='/soup'>Soup</Link>
                </li>
            </ul>
    )
}

export default Home