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
                    {[
                        [ASSETS.IMAGES.home, "/inicio", "Início"],
                        [ASSETS.IMAGES.save_money, "/saldo", "Saldo"],
                        [ASSETS.IMAGES.extract, "/extrato", "Extrato"],
                        [ASSETS.IMAGES.transfer, "/transfer", "Transferir"],
                        [ASSETS.IMAGES.card, "/cartoes", "Cartões"],
                        [ASSETS.IMAGES.help, "/help", "Ajuda"],
                        [
                            ASSETS.IMAGES.user,
                            "/dadosPessoais",
                            "Dados pessoais",
                        ],
                    ].map(([icon, href, text]) => (
                        <Icons
                            key={text}
                            icon={icon}
                            alt={text}
                            href={href}
                            text={text}
                        />
                    ))}
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
                            value={`R$ ${props.userBalance.toFixed(2)}`}
                            icon={ASSETS.IMAGES.save_money}
                            alt="saldo"
                        />

                        <Card
                            tittle="Transferir"
                            value="Clique aqui"
                            icon={ASSETS.IMAGES.transfer}
                            alt="transferir"
                            href="/transfer"
                        />
                        <Card
                            tittle="Cartões"
                            value="Saiba mais"
                            icon={ASSETS.IMAGES.card}
                            alt="cartões"
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
                                    {props.userTransactions.map(
                                        ({ _id, tipo, valor, data }) => (
                                            <TableLine
                                                key={_id}
                                                date={data}
                                                store={tipo}
                                                value={"R$ " + valor.toFixed(2)}
                                            />
                                        )
                                    )}
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
                                        img={ASSETS.IMAGES.heart}
                                        alt="icone de coração e uma planta"
                                        link="index.html"
                                        title="Projeto verde. Saiba como ajudar!"
                                    />
                                    <News
                                        img={ASSETS.IMAGES.user_config}
                                        className="w-50"
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
