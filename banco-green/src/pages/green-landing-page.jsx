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
                        <a href="index.html">Home</a>
                    </li>
                    <li>                     
                        <a href="cards">Cartões</a>
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
                    <h2>A sustentabilidade é <br/> nosso <span>compromisso!</span></h2>
                    <p>
                        É cliente Green e quer nos ajudar nessa missão de tornar um mundo mais sustentável?
                        Conheça o Projeto Verde! <br/>
                        Com a ajuda da nação Green, estamos fazendo a diferença na vida de milhares de pessoas. Nosso 
                        time já implantou mais de quinhentas hortas em comunidades ao redor do Brasil, além dos treinamentos e 
                        das mais de 500.000 árvores plantadas em áreas de reflorestamento! Aqui na Green, o seu dinheiro é 
                        sempre verde!
                    </p>
                    <button>Saiba Mais</button>
                </div>
                <div className="imgBox">
                    <img className="sustentavel" alt="sustentabiliade" src={ASSETS.IMAGES.sustentability} />
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


