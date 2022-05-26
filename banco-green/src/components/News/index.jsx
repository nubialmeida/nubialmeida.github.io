import React from "react";
import { Link } from "react-router-dom";

export default function News(props) {
    return (
        <tr>
            <td>
                <Link to={props.link} className="d-flex">
                    <img src={props.img} alt="logo-green" />
                    <div>{props.title}</div>
                </Link>
            </td>
        </tr>
    );
}
