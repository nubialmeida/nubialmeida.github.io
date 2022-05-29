import React from "react";
import { useNavigate } from "react-router-dom";
import ASSETS from "../Assets";
import { formatDate } from "../../functions/format";

export default function Comprovant(props) {
    const navigate = useNavigate();
    const note = {
        value: props.valueToTransfer,
        destiny: props.destinyToTransfer,
    };

    const date = formatDate(props.lastTransaction);

    return (
        <div className={`comprovant ${props.className ?? ""}`}>
            <span className="close" onClick={() => navigate("/onboard")}>
                X
            </span>
            <img
                src={ASSETS.GIFS.send}
                className="send"
                alt="boneco do  futuro com cartão"
            />
            <div>
                <h3 className="w-90">Pronto, enviamos sua transferência</h3>
                <div>
                    <span>
                        <b>R$ {note.value}</b>
                    </span>
                </div>
                <div>
                    <span>
                        <b>Para</b>
                    </span>
                    {" " + note.destiny}
                </div>
                <div>{date}</div>
            </div>
        </div>
    );
}
