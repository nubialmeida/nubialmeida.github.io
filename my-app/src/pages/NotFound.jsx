import React from "react";

export default function NotFound() {
    return (
        <div className="not-found">
            <img
                src={require("../assets/images/error404.png")}
                alt="error.404"
            />
        </div>
    );
}
