import React from "react";
import { Link } from "react-router-dom";

export default function Icons(props) {
    return (
        <li>
            <img src={props.icon} alt={props.alt} className="icon-menu" />
            <Link to={props.href}>
                <span>{props.text}</span>
            </Link>
        </li>
    );
}
