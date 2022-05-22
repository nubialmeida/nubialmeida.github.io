import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <div className="card-item">
            <Link to="index.html">
                <div className="box">
                    <div className="card-tittle">{props.tittle}</div>
                    <div className="card-description">{props.value}</div>
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
