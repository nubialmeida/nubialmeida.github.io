import React from "react";

export default function InputComponent(props) {
    return (
        <div className="input">
            <input
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                required
                autoComplete="off"
                className="input-area"
            />
            <label>{props.description}</label>
        </div>
    );
}
