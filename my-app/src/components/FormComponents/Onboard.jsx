import React from "react";
import "../../styles/onboard.css";
import logo from "../../assets/images/leaf.png";
import icon1 from "../../assets/images/home.png";
import icon2 from "../../assets/images/save-money.png";
import icon3 from "../../assets/images/extract.png";
import icon4 from "../../assets/images/transfer.png";
import icon5 from "../../assets/images/card.png";
import icon6 from "../../assets/images/help.png";
import icon7 from "../../assets/images/user.png";
import icon8 from "../../assets/images/search.png";
import Icons from "../Icons";
import Card from "../Card";

export default function OnboardComponent(props) {
    return (
        <>
            <div className="side-menu">
                <div className="brand-name">
                    <h1>Green</h1>
                </div>
                <ul>
                    <Icons
                        icon={icon1}
                        alt="inicio"
                        href="index.html"
                        text="Início"
                    />
                    <Icons
                        icon={icon2}
                        alt="saldo"
                        href="index.html"
                        text="Saldo"
                    />
                    <Icons
                        icon={icon3}
                        alt="extrato"
                        href="index.html"
                        text="Extrato"
                    />
                    <Icons
                        icon={icon4}
                        alt="transferir"
                        href="index.html"
                        text="Saldo"
                    />
                    <Icons
                        icon={icon5}
                        alt="cartões"
                        href="index.html"
                        text="Cartões"
                    />
                    <Icons
                        icon={icon6}
                        alt="ajuda"
                        href="index.html"
                        text="Ajuda"
                    />
                    <Icons
                        icon={icon7}
                        alt="dados-pessoais"
                        href="index.html"
                        text="Dados Pessoais"
                    />
                </ul>
            </div>

            <div className="container">
                <div className="header">
                    <div className="nav">
                        <div className="search">
                            <input type="text" placeholder="Pesquisa" />
                            <button type="submit">
                                <img
                                    src={icon8}
                                    alt="pesquisa"
                                    className="icon-menu"
                                />
                            </button>
                        </div>

                        <div className="user">
                            <a href="index.html" className="btn">
                                Sair
                            </a>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="cards">
                        <Card
                            title="Saldo"
                            value="R$ 1.280,55"
                            icon={icon2}
                            alt="saldo"
                        />
                        <Card
                            title="Extrato"
                            value="Selecione o período"
                            icon={icon3}
                            alt="saldo"
                        />
                        <Card
                            title="Transferir"
                            value="Clique aqui"
                            icon={icon4}
                            alt="saldo"
                        />
                        <Card
                            title="Cartões"
                            value="Saiba mais"
                            icon={icon5}
                            alt="saldo"
                        />
                    </div>
                    <div className="content-2">
                        <div className="recent-info">
                            <div className="tittle">
                                <h2>Atividades Recentes</h2>
                                <a href="index.html" className="btn">
                                    Ver Mais
                                </a>
                            </div>
                            <table>
                                <tr>
                                    <th>Data</th>
                                    <th>Lançamentos</th>
                                    <th>Valor</th>
                                    <th>Saldo</th>
                                </tr>
                                <tr>
                                    <td>14/03/2021</td>
                                    <td>Posto Ipiranga LTDA</td>
                                    <td>R$ 80,00</td>
                                    <td>R$ 1.250,33</td>
                                </tr>
                                <tr>
                                    <td>14/03/2021</td>
                                    <td>Posto Ipiranga LTDA</td>
                                    <td>R$ 80,00</td>
                                    <td>R$ 1.250,33</td>
                                </tr>
                                <tr>
                                    <td>14/03/2021</td>
                                    <td>Posto Ipiranga LTDA</td>
                                    <td>R$ 80,00</td>
                                    <td>R$ 1.250,33</td>
                                </tr>
                                <tr>
                                    <td>14/03/2021</td>
                                    <td>Posto Ipiranga LTDA</td>
                                    <td>R$ 80,00</td>
                                    <td>R$ 1.250,33</td>
                                </tr>
                                <tr>
                                    <td>14/03/2021</td>
                                    <td>Posto Ipiranga LTDA</td>
                                    <td>R$ 80,00</td>
                                    <td>R$ 1.250,33</td>
                                </tr>
                            </table>
                        </div>
                        <div className="more-info">
                            <div className="tittle">
                                <h2>Fique por dentro!</h2>
                            </div>
                            <table>
                                <tr>
                                    <td>
                                        <img src={logo} alt="logo-green" />
                                    </td>
                                    <td>
                                        <a href="index.html">
                                            Projeto verde. Saiba como ajudar!
                                        </a>
                                    </td>
                                    {/* <td><img src={logo} alt="logo-green" /></td> */}
                                </tr>

                                <tr>
                                    <td>
                                        <img src={logo} alt="logo-green" />
                                    </td>
                                    <td>
                                        <a href="index.html">
                                            Go paperless! Atualize suas
                                            configurações em "Dados Pessoais"
                                            para tornar sua conta 100% digital.
                                        </a>
                                    </td>
                                    {/* <td><img src={logo} alt="logo-green" /></td> */}
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
