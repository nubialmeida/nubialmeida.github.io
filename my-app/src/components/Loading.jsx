import React from "react";

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
