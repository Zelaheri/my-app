import React from "react";
import LoggedNavbar from "../components/navbar";

function NotFound() {
    return (
        <div>
            <LoggedNavbar />
            <div class="main">
                <div class="back-panel">
                    <div class="card text-center">
                        <h5 class="card-header">ESTA PÁGINA NÃO EXISTE</h5>
                        <div class="card-body">
                            <h1>😵</h1>
                            <hr />
                            <a href="./" class='btn btn-primary'>Voltar à página principal</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound