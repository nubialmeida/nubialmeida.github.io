import React, { useState } from "react";
import Login from "../components/FormComponents/Login";
import Register from "../components/FormComponents/Register";
import Carrousel from "../components/Carrousel";
import "../styles/home.css";

export default function Home() {
    /* const calltoaction_btn = document.querySelectorAll(".calltoaction");
    const main = document.querySelector("main");
    
    calltoaction_btn.forEach((btn) => {
        btn.addEventListener("click", () => {
            main.classList.toggle("register-mode");
        });
    }); */
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
