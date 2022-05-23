import React from "react";
import { Link } from "react-router-dom";

export default function Icons(props) {
    return (
        <li>
            <Link to={props.href}>
                <img src={props.icon} alt={props.alt} className="icon-menu" />
                <span>{props.text}</span>
            </Link>
        </li>
    );
}
