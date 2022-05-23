import React from "react";
import { Link } from "react-router-dom";
import Icons from "../Icons";
import Card from "../Card";
import "../../styles/onboard.scss";
import TableHeader from "../Tables/Header";
import TableLine from "../Tables/Body";
import News from "../News";

import ASSETS from "../Assets";

export default function OnboardComponent(props) {
    console.log(props);
    return (
        <div className="onboard">
            <div className="side-menu">
                <div className="brand-name">
                    <h1>Green</h1>
                </div>
                <ul>
                    <Icons
                        icon={ASSETS.IMAGES.home}
                        alt="inicio"
                        href="index.html"
                        text="Início"
                    />
                    <Icons
                        icon={ASSETS.IMAGES.save_money}
                        alt="saldo"
                        href="index.html"
                        text="Saldo"
                    />
                    <Icons
                        icon={ASSETS.IMAGES.extract}
                        alt="extrato"
                        href="index.html"
                        text="Extrato"
                    />
                    <Icons
                        icon={ASSETS.IMAGES.transfer}
                        alt="transferir"
                        href="index.html"
                        text="Saldo"
                    />
                    <Icons
                        icon={ASSETS.IMAGES.card}
                        alt="cartões"
                        href="index.html"
                        text="Cartões"
                    />
                    <Icons
                        icon={ASSETS.IMAGES.help}
                        alt="ajuda"
                        href="index.html"
                        text="Ajuda"
                    />
                    <Icons
                        icon={ASSETS.IMAGES.user}
                        alt="dados-pessoais"
                        href="index.html"
                        text="Dados Pessoais"
                    />
                </ul>
            </div>

            <div className="main">
                <div className="header">
                    <div className="nav">
                        <div className="search">
                            <input type="text" placeholder="Pesquisa" />
                            <button type="submit">
                                <img
                                    src={ASSETS.IMAGES.search}
                                    alt="pesquisa"
                                    className="icon-menu"
                                />
                            </button>
                        </div>

                        <div className="user">
                            <Link to="index.html" className="button">
                                Sair
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="cards">
                        <Card
                            tittle="Saldo"
                            value={`R$ ${890}`}
                            icon={ASSETS.IMAGES.save_money}
                            alt="saldo"
                        />
                        <Card
                            tittle="Extrato"
                            value="Selecione o período"
                            icon={ASSETS.IMAGES.extract}
                            alt="saldo"
                        />
                        <Card
                            tittle="Transferir"
                            value="Clique aqui"
                            icon={ASSETS.IMAGES.transfer}
                            alt="saldo"
                        />
                        <Card
                            tittle="Cartões"
                            value="Saiba mais"
                            icon={ASSETS.IMAGES.card}
                            alt="saldo"
                        />
                    </div>
                    <div className="content-2">
                        <div className="recent-info">
                            <div className="tittle">
                                <div className="inner-tittle">
                                    Atividades Recentes
                                </div>
                                <Link to="index.html" className="button">
                                    Ver Mais
                                </Link>
                            </div>
                            <table>
                                <TableHeader />
                                <tbody>
                                    <TableLine
                                        date="14/03/2021"
                                        store="Posto Ipiranga LTDA"
                                        value="R$ 80,00"
                                        cash="R$ 1.250,33 "
                                    />
                                    <TableLine
                                        date="14/03/2021"
                                        store="Posto Ipiranga LTDA"
                                        value="R$ 80,00"
                                        cash="R$ 1.250,33 "
                                    />
                                    <TableLine
                                        date="14/03/2021"
                                        store="Posto Ipiranga LTDA"
                                        value="R$ 80,00"
                                        cash="R$ 1.250,33 "
                                    />
                                    <TableLine
                                        date="14/03/2021"
                                        store="Posto Ipiranga LTDA"
                                        value="R$ 80,00"
                                        cash="R$ 1.250,33 "
                                    />
                                    <TableLine
                                        date="14/03/2021"
                                        store="Posto Ipiranga LTDA"
                                        value="R$ 80,00"
                                        cash="R$ 1.250,33 "
                                    />
                                </tbody>
                            </table>
                        </div>
                        <div className="more-info">
                            <div className="tittle">
                                <div className="inner-tittle">
                                    Fique por dentro!
                                </div>
                            </div>
                            <table>
                                <tbody>
                                    <News
                                        img={ASSETS.IMAGES.hand_globe}
                                        link="index.html"
                                        title="Projeto verde. Saiba como ajudar!"
                                    />
                                    <News
                                        img={ASSETS.IMAGES.pen}
                                        link="index.html"
                                        title='Go paperless! Atualize suas
                                    configurações em "Dados Pessoais"
                                    para tornar sua conta 100% digital.'
                                    />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
