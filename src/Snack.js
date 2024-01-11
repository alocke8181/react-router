import React from "react";
import { Link } from "react-router-dom";

const Snack = ({name, video}) =>{

    return (
        <div>
            <h1>{name}</h1>
            <iframe width="560" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p><Link to='/' >Return</Link></p>
        </div>
    )

}

export default Snack;