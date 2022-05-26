import React from "react";

export default function Destiny(props) {
    console.log(props);
    return (
        <div className={`destiny ${props.className ?? ""}`}>
            <h3> Para quem você quer transferir R$ {props.valueToTransfer}</h3>
            <form className="d-flex flex-row">
                <input
                    type="text"
                    value={props.destinyToTransfer}
                    onChange={props.setDestinyToTransfer}
                />
                <select>
                    <option key={"default"} value="---" selected disabled>
                        ---Select CPF---
                    </option>
                    {props.allUsers.data.map(({ cpf }) => (
                        <option
                            key={cpf.replaceAll(/\D/g, "")}
                            value={cpf.replaceAll(/\D/g, "")}
                        >
                            {cpf.replaceAll(/\D/g, "")}
                        </option>
                    ))}
                </select>
            </form>
            <button className="btn" onClick={props.function}>
                Transferir para este contato
            </button>
        </div>
    );
}
