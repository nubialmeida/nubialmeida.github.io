import React from "react";
// import { useNavigate } from "react-router-dom";
import "../styles/help.scss";
// import "../components/InputComponents/Button";

export default function Help() {
    

    return (
        <div className="container">
      <div className="wrapper">
        <button className="btn">
          <strong>Como navegar pela plataforma Green?</strong>          
        </button>

        <div className='content'>
          <ul>
                <li>
                    <button>Como faço meu cadastro?</button>
                </li>
                <li>
                    <button>Estou tendo problemas com meu login.</button>
                </li>
                <li>
                    <button>Como navegar pela plataforma Green?</button>
                </li>
            </ul>
        </div>
      </div>
      <div className="wrapper">
        <button className="btn">
         <strong>Transferências e área pix.</strong>          
        </button>

        <div className='content'>

            <ul>
                <li>
                    <button>Como utilizar o Pix?</button>
                </li>
                <li>
                    <button>Quais formas de transferência eu tenho disponível na Green?</button>
                </li>
                <li>
                    <button>Envio internacional, como fazer?</button>
                </li>
            </ul>
        </div>
      </div>
      <div className="wrapper">
        <button className="btn">
          <strong>Canais de atendimento.</strong>          
        </button>

        <div className='content'>

            <ul>
                <li>
                    <button>Nos envie um e-mail!</button>
                </li>
                <li>
                    <button>Entre em contato por telefone!</button>
                </li>
                <li>
                    <button>Chat e WhatsApp!</button>
                </li>
            </ul>
            
        </div>
      </div>
    </div>


    );
}