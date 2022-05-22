import React, { useState } from "react";
import Login from "../components/FormComponents/Login";
import Register from "../components/FormComponents/Register";
import Carrousel from "../components/Carrousel";
import "../styles/home.scss";

export default function Home() {
    const [registerMode, toggleRegisterMode] = useState(false);
    return (
        <main className={registerMode ? "register-mode" : ""}>
            <div className="main-box">
                <div className="inner-box">
                    <div className="forms">
                        <Login function={() => toggleRegisterMode(true)} />
                        <Register function={() => toggleRegisterMode(false)} />
                    </div>

                    <Carrousel />
                </div>
            </div>
        </main>
    );
}
