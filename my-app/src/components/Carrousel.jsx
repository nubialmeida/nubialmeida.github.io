import React, { useState } from "react";

export default function Carrousel() {
    const [showImage, setShowImage] = useState(1);

    function moveSlider(e) {
        let index = e.target.dataset.value;

        setShowImage(index);
        /* let currentImage = document.querySelector(`.img${index}`);
        images.forEach((img) => img.classList.remove("show"));
        currentImage.classList.add("show"); */

        // e.target.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
        const textSlide = document.querySelector(".text-group");
        textSlide.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

        /* bullets.forEach((bull) => bull.classList.remove("active"));
        this.classList.add("active"); */
    }

    return (
        <div className="images">
            <div className="images-slide">
                <img
                    src={require("../assets/images/logo.png")}
                    className={`image img1 ${showImage === 1 ? "show" : ""}`}
                    alt="logo-green"
                />
                <img
                    src={require("../assets/images/leaf.png")}
                    className={`image img2 ${showImage === 2 ? "show" : ""}`}
                    alt="folha"
                />
                <img
                    src={require("../assets/images/img1.png")}
                    className={`image img1 ${showImage === 3 ? "show" : ""}`}
                    alt="sustentabilidade"
                />
            </div>

            <div className="text-slide">
                <div className="texts">
                    <div className="text-group">
                        <h2>Saia do vermelho com a Green!</h2>
                        <h2>Torne seu bolso mais leve.</h2>
                        <h2>O seu banco sustentável.</h2>
                    </div>
                </div>

                <div className="bullets">
                    <span
                        onClick={(e) => moveSlider(e)}
                        className={showImage === 1 ? "active" : ""}
                        data-value="1"
                    ></span>
                    <span
                        onClick={(e) => moveSlider(e)}
                        className={showImage === 2 ? "active" : ""}
                        data-value="2"
                    ></span>
                    <span
                        onClick={(e) => moveSlider(e)}
                        className={showImage === 3 ? "active" : ""}
                        data-value="3"
                    ></span>
                </div>
            </div>
        </div>
    );
}
