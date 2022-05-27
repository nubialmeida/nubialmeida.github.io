import React, { useState, useEffect } from "react";
import Login from "../components/FormComponents/Login";
import Register from "../components/FormComponents/Register";
import Carrousel from "../components/Carrousel";
import * as API from "../api";
import "../styles/home.scss";

export default function Checkout() {
    useEffect(() => {
        async function apiRequest() {
            API.getCookie(); // checar sessao
        }
        apiRequest();
    }, []);
    const [registerMode, toggleRegisterMode] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userDate, setUserDate] = useState("");
    const [userCpf, setUserCpf] = useState("");
    const [userPassword, setUserPassword] = useState("");

    return (
        <div className="home-menu">
            <div className="position-fixed fixed-top">
                <div>Nome {userName}</div>
                <div>Email {userEmail}</div>
                <div>Senha {userPassword}</div>
                <div>CPF {userCpf}</div>
                <div>Cel {userPhone}</div>
                <div>Data {userDate}</div>
            </div>
            <main className={registerMode ? "register-mode" : ""}>
                <div className="main-box">
                    <div className="inner-box">
                        <div className="forms">
                            <Login
                                user={{
                                    email: userEmail,
                                    password: userPassword,
                                }}
                                setUserEmail={(e) =>
                                    setUserEmail(e.target.value)
                                }
                                setUserPassword={(e) =>
                                    setUserPassword(e.target.value)
                                }
                                changeScreen={() => toggleRegisterMode(true)}
                            />
                            <Register
                                user={{
                                    name: userName,
                                    password: userPassword,
                                    date: userDate,
                                    email: userEmail,
                                    phone: userPhone,
                                    cpf: userCpf,
                                }}
                                setUserName={(e) => setUserName(e.target.value)}
                                setUserPassword={(e) =>
                                    setUserPassword(e.target.value)
                                }
                                setUserCpf={(e) => setUserCpf(e.target.value)}
                                setUserDate={(e) => setUserDate(e.target.value)}
                                setUserPhone={(e) =>
                                    setUserPhone(e.target.value)
                                }
                                setUserEmail={(e) =>
                                    setUserEmail(e.target.value)
                                }
                                changeScreen={() => toggleRegisterMode(false)}
                            />
                        </div>

                        <Carrousel />
                    </div>
                </div>
            </main>
        </div>
    );
}
