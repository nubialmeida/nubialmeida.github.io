import React from "react";
import { Link } from "react-router-dom";

export default function News(props) {
    return (
        <tr>
            <td>
                <img src={props.img} alt="logo-green" />
            </td>
            <td>
                <Link to={props.link}>{props.title}</Link>
            </td>
        </tr>
    );
}
