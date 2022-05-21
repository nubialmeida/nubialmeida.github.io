import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputComponent from "../InputComponents/Input";
import ButtonComponent from "../InputComponents/Button";

export default function RegisterComponents(props) {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userDate, setUserDate] = useState("");
    const [userCpf, setUserCpf] = useState("");
    const [userPassword, setUserPassword] = useState("");

    return (
        <form className="register-form">
            <div className="logo">
                <img
                    src={require("../../assets/images/leaf.png")}
                    alt="green-logo"
                />
                <h3>Green</h3>
            </div>

            <div className="heading">
                <h2>Cadastre-se</h2>
                <h6>
                    Já é cliente?
                    <div className="calltoaction" onClick={props.function}>
                        Entrar
                    </div>
                </h6>
            </div>
            <div className="info-form">
                <InputComponent
                    type="text"
                    description="Nome"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <InputComponent
                    type="text"
                    description="Email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <InputComponent
                    type="text"
                    description="Telefone"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                />
                <InputComponent
                    type="date"
                    description="Data de Nascimento"
                    value={userDate}
                    onChange={(e) => setUserDate(e.target.value)}
                />
                <InputComponent
                    type="text"
                    description="CPF"
                    value={userCpf}
                    onChange={(e) => setUserCpf(e.target.value)}
                />
                <InputComponent
                    type="password"
                    description="Senha"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
                <ButtonComponent
                    id="register-btn"
                    type="submit"
                    value="Cadastrar"
                />
                <p className="text">
                    Eu concordo com os
                    <Link to="index.html"> Termos de Uso</Link>
                </p>
            </div>
        </form>
    );
}
