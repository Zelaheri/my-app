import React from "react";
import Navbar from "../components/loggedNavbar";
import Card from "../components/card";

function About() {
    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="back-panel">
                    <Card name="Turma"/>
                    <Card name="Aluno"/>
                </div>
            </div>
        </div>
    )
}

export default About