import React from "react";
// import { useNavigate } from "react-router-dom";
import "../styles/landing-page.scss";
import ASSETS from "../components/Assets";
// import "../components/InputComponents/Button";

export default function LandingPage() {
    return (
        <div className="main-div">
            <div className="circle"></div>
            <header>
                <img className="logo" alt="logo" src={ASSETS.IMAGES.leaf} />
                <ul>
                    <li>
                        <a href="green-landing-page">Home</a>
                    </li>
                    <li>                     
                        <a href="index.html">Cartões</a>
                    </li>
                    <li>
                     <a href="help">Ajuda</a>
                    </li>
                    <li>
                        <a href="home">Entrar</a>
                    </li>
                </ul>
            </header>

            <div className="content">
                <div className="textBox">
                    <h2>Saiba mais sobre  <br/> nossos <span>cartões!</span></h2>
                    <p>
                        Os cartões de crédito Green chegaram e você já pode garantir o seu verdinho! 
                        Na Green, você pode adquirir seu cartão sem burocracia. Solicite on-line e receba na sua casa. 
                        Simples, rápido e fácil assim, só na Green.
                    </p>
                    <button>Saiba Mais</button>
                </div>
                <div className="imgBox">
                    <img className="cards" alt="sustentabiliade" src={ASSETS.IMAGES.credit_card} />
                </div>  
            </div>

            <ul className="thumb">
                <li>
                <img alt="sustentabiliade" src={ASSETS.IMAGES.credit_card} />
                </li>
                <li>
                <img alt="crescimento" src={ASSETS.IMAGES.sustentability} />
                </li>
                <li>
                <img alt="cartões" src={ASSETS.IMAGES.growth} />
                </li>
            </ul>

            <ul className="social">
                <li>
                    <img alt="facebook" src={ASSETS.IMAGES.facebook} />
                </li>
                <li>
                    <img alt="instagram" src={ASSETS.IMAGES.instagram} />
                </li>
                <li>
                    <img alt="twitter" src={ASSETS.IMAGES.twitter} />
                </li>
            </ul>

         </div> 

    );
}


