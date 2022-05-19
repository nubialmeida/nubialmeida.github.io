import React from "react";
import Login from "../components/FormComponents/Login";
import Register from "../components/FormComponents/Register";
import Carrousel from "../components/Carrousel";

export default function Home() {
    const calltoaction_btn = document.querySelectorAll(".calltoaction");
    const main = document.querySelector("main");

    calltoaction_btn.forEach((btn) => {
        btn.addEventListener("click", () => {
            main.classList.toggle("register-mode");
        });
    });
    return (
        <main>
            <div className="main-box">
                <div className="inner-box">
                    <div className="forms">
                        <Login />
                        <Register />
                    </div>

                    <Carrousel />
                </div>
            </div>
        </main>
    );
}
