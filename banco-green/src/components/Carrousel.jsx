import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Carrousel() {
    function changeText(e) {
        const textSlide = document.querySelector(".text-group");
        textSlide.style.transform = `translateY(${-e * 2.5}rem)`;
    }

    return (
        <div className="images">
            <CCarousel indicators onSlide={(e) => changeText(e)}>
                <CCarouselItem>
                    <CImage
                        className="d-block w-100"
                        src={require("../assets/images/piggy-bank.png")}
                        alt="slide 1"
                    />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage
                        className="d-block w-100"
                        src={require("../assets/images/wallet.png")}
                        alt="slide 2"
                    />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage
                        className="d-block w-100"
                        src={require("../assets/images/img1.png")}
                        alt="slide 3"
                    />
                </CCarouselItem>
            </CCarousel>
            <div className="texts">
                <div className="text-group">
                    <h2>Saia do vermelho com a Green!</h2>
                    <h2>Torne seu bolso mais leve.</h2>
                    <h2>Um banco sustentável.</h2>
                </div>
            </div>
        </div>
    );
}
