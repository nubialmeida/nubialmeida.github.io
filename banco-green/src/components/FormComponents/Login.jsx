import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputComponent from "../InputComponents/Input";
import ButtonComponent from "../InputComponents/Button";

export default function LoginComponents(props) {
    const [userCpf, setUserCpf] = useState("");
    const [userPassword, setUserPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userCpf, userPassword);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="login-form">
            <div className="logo">
                <img
                    src={require("../../assets/images/leaf.png")}
                    alt="green-logo"
                />
                <h4>Green</h4>
            </div>

            <div className="heading">
                <h2>Bem-vindo!</h2>
                <h6>
                    Não tem uma conta ainda?
                    <div className="calltoaction" onClick={props.function}>
                        Cadastrar
                    </div>
                </h6>
            </div>
            <div className="info-form">
                <InputComponent
                    type="text"
                    description="CPF"
                    placeholder="000.000.000-00"
                    value={userCpf}
                    onChange={(e) => setUserCpf(e.target.value)}
                />
                <InputComponent
                    type="password"
                    description="Senha"
                    placeholder="********"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
                <ButtonComponent id="button" type="submit" value="Login" />
                <p className="text">
                    Esqueceu sua senha? Obtenha
                    <Link to="/help">ajuda</Link> para entrar.
                </p>
            </div>
        </form>
    );
}
