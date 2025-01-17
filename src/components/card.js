import React from "react";
import Navbar from "../components/loggedNavbar";

function Card(prop) {
    return (
        <div>
            <div className="card">
                <h5 className="card-header">{prop.name}</h5>
                <div className="card-body">
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Card