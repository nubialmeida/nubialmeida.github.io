import React from "react";

export default function TableLine(props) {
    return (
        <tr>
            <th>{props.date}</th>
            <th>{props.store}</th>
            <th>{props.value}</th>
            <th>{props.cash}</th>
        </tr>
    );
}
