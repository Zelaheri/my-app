import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import axios from "axios";

function Home() {
    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        setValues((preValue) => ({
            ...preValue,
            [value.target.name]: value.target.value,
        }))
        // console.log(values)
    }

    const handleClickBtn = () => {
        const email = values.username;
        const senha = values.password;

        if (values) {
            axios.get(
                `http://localhost:3001/professor?email=${email}&senha=${senha}`
            ).then((response) => {
                if (response.data.length > 0) {
                    if (response.data[0].email === values.username && response.data[0].senha === values.password) {
                        console.log("blz fi, pó passar");
                        window.location.href = "./about";
                    }
                } else {
                    console.log("ai nao paizao");
                }
            });
        }
    };

    //  useEffect(() => {
    //     axios.get(
    //         "http://localhost:3001/professor"
    //     ).then((response) => {
    //         console.log(response.data);
    //     });
    //  }, []);

    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="back-panel">
                    <div className="card">
                        <h5 className="card-header">Q-Acadêmico</h5>
                        <div className="card-body">
                            <form>
                                <h5 className="card-title">Usuário</h5>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                    <input
                                        id="validationDefault01"
                                        name="username"
                                        type="text"
                                        className="form-control"
                                        placeholder="Usuário"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        onChange={handleChangeValues}
                                        required />
                                </div>
                                <h5 className="card-title">Senha</h5>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                    <input
                                        id="validationDefault02"
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="Senha"
                                        aria-label="Senha"
                                        aria-describedby="basic-addon1"
                                        onChange={handleChangeValues}
                                        required />
                                </div>
                                <br />
                            </form>
                            <div className="text-center row">
                                <button className="btn btn-primary" onClick={() => { handleClickBtn() }}>Entrar</button>
                                <a href="./recoverypage">Esqueceu a senha?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home