import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage () {

    const navigate= useNavigate();

    function navigateHandler() {
        navigate("events");
    }

    return <><h1>HomePage</h1><p>Go to<Link to={"events"}> Events</Link></p><button onClick={navigateHandler}>Events page</button></>
   

    };

export default HomePage;