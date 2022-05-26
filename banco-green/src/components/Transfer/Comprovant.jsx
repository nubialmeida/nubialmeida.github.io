import React from "react";
import ASSETS from "../Assets";

export default function Comprovant(props) {
    const note = {
        value: props.valueToTransfer,
        destiny: props.destinyToTransfer,
    };
    return (
        <div className={`comprovant ${props.className ?? ""}`}>
            <img
                src={ASSETS.GIFS.send}
                className="send"
                alt="boneco do  futuro com cartão"
            />
            <div>
                <h3 className="w-90">Pronto, enviamos sua transferência</h3>
                <div>R$ {note.value}</div>
                <div>Para {note.destiny}</div>
                <div>Quando {props.time}</div>
            </div>
        </div>
    );
}
