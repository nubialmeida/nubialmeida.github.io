import React from "react";
import ASSETS from "../Assets";

export default function Comprovant(props) {
    console.log(props);
    const note = {
        value: props.valueToTransfer,
        destiny: props.destinyToTransfer,
        data: props.lastTransaction,
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
                <div>Quando {note.data}</div>
            </div>
        </div>
    );
}
