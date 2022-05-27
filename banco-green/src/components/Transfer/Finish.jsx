import React from "react";

export default function Finish(props) {
    return (
        <div className={`finish ${props.className ?? ""}`}>
            <h3> Transferindo</h3>
            <div className="transfering">
                <div className="reais">R$ {props.valueToTransfer}</div>
                <div>Para {props.destinyToTransfer}</div>
            </div>
            <button className="btn" onClick={props.function}>
                Transferir
            </button>
        </div>
    );
}
