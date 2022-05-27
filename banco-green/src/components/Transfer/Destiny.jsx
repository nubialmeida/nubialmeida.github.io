import React from "react";

export default function Destiny(props) {
    return (
        <div className={`destiny ${props.className ?? ""}`}>
            <h3> Para quem você quer transferir R$ {props.valueToTransfer}</h3>
            <form className="d-flex flex-row">
                <input
                    type="text"
                    value={props.destinyToTransfer}
                    onChange={props.setDestinyToTransfer}
                />
                {props.destinyToTransfer.length > 4 &&
                props.destinyToTransfer.length < 11 ? (
                    <select
                        defaultValue={"default"}
                        onChange={props.setDestinyToTransfer}
                    >
                        <option key={"default"} value="default" disabled>
                            ---Selecione CPF---
                        </option>
                        {props.allUsers.data.map(({ cpf }) => {
                            let userCpf = cpf.replaceAll(/\D/g, "");
                            if (userCpf.includes(props.destinyToTransfer)) {
                                return (
                                    <option key={userCpf} value={userCpf}>
                                        {userCpf}
                                    </option>
                                );
                            } else return null;
                        })}
                    </select>
                ) : null}
            </form>
            <button className="btn" onClick={props.function}>
                Transferir para este contato
            </button>
        </div>
    );
}
