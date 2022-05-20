import React from "react";
import "../styles/loading.css";

export default function Loading() {
    return (
        <div className="loading">
            <img
                src={require("../assets/images/loading-buffering.gif")}
                alt="loading"
            />
        </div>
    );
}
