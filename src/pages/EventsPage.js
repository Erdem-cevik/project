import React from "react";
import { useNavigate,Link } from "react-router-dom";

function EventsPage () {
    const navigate= useNavigate();

    function navigateHandler() {
        navigate("/");
    }
    const EVENTS=[
        {id: "1", title: "Event 1" ,description: "Lorem ipsum dolor sit amet"},

        {id: "2", title: "Event 2" ,description: "Lorem ipsum dolor sit amet"},

        {id: "3", title: "Event 3" ,description: "Lorem ipsum dolor sit amet"},

    ]

    return <><><h1>Events Page</h1>
    <button onClick={navigateHandler}>Return Home page</button></>
     <header>
        <h1>Events</h1>
        <ul>
            {EVENTS.map((events)=>{
                <li key={events.id}>
                    <Link to={events.id}>{events.title}</Link>
                    <p>{events.description}</p>
                </li>
            })}
        </ul>
     </header></>
    ;};

export default EventsPage;