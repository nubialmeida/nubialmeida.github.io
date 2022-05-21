import React, { useState } from "react";

export default function InputComponent(props) {
    const IS_ACTIVE = { TRUE: "active", FALSE: "" };
    const [active, setActive] = useState(IS_ACTIVE.FALSE);

    let boxClass = ["input-area"];
    if (active) {
        boxClass.push("active");
    }

    return (
        <div className="input">
            <input
                type={props.type}
                placeholder={props?.placeholder}
                onChange={props.onChange}
                onFocus={() => setActive(IS_ACTIVE.TRUE)}
                onBlur={
                    props.value === "" ? () => setActive(IS_ACTIVE.FALSE) : null
                }
                required
                autoComplete="off"
                className={boxClass.join(" ")}
            />
            <label>{props.description}</label>
        </div>
    );
}
