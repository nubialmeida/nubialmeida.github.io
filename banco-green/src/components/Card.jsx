import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <div className="card">
            <Link to="index.html">
                <div className="box">
                    <h1>{props.title}</h1>
                    <h3>{props.value}</h3>
                </div>
                <div className="icon-case">
                    <img
                        src={props.icon}
                        alt={props.alt}
                        className="icon-cards"
                    />
                </div>
            </Link>
        </div>
    );
}
