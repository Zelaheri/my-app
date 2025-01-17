import React from "react";
import Navbar from "../components/navbar";

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function click() {
    const email = document.getElementById("validationDefault01").value;
    const newChildNode = document.createElement('P')
    if (validateEmail(email)) {
        // Caso já não haja uma mensagem de redirecionamento
        if (!document.getElementById("new-child-node")) {
            // Cria um novo elemento
            newChildNode.id = 'new-child-node'
            newChildNode.textContent = "Redirecionando ao login.";
            // Adiciona o novo elemento e muda o título do card
            document.getElementById("text-group").append(newChildNode)
            document.getElementById("card-title").textContent = "Pronto!";

            // Adiciona um spinner ao Button
            document.getElementById("button").innerHTML = (`<div class="spinner-border" role="status"><span class="visually-hidden"></span></div>`)

            // Redireciona à home.js depois de 1500ms
            setTimeout(() => {
                window.location.href = "./"
            }, 1500);
        }
    } else {
        document.getElementById("card-title").textContent = "Email inválido!";
    }
};


function RecoveryPage() {
    // {Requisição se email existe no banco}

    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="back-panel">
                    <div className="card">
                        <h5 className="card-header">Q-Acadêmico</h5>
                        <div className="card-body">
                            <form>
                                <div id="text-group">
                                    <h5 id="card-title" className="card-title">Email de recuperação</h5>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                    <input id="validationDefault01" type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" required />
                                </div>
                                <hr />
                            </form>
                            <div className="text-center row">
                                <button onClick={click} id="button" className="btn btn-primary">Atualizar a senha</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecoveryPage