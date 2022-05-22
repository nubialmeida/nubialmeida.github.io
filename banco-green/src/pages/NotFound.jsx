import React from "react";
import "../styles/not-found.scss";

import ASSETS from "../components/Assets";

export default function NotFound() {
    return (
        <div className="not-found">
            <video autoplay>
                <source src={ASSETS.VIDEOS.error404} alt="error.404" />
                video não compatível
            </video>
        </div>
    );
}
