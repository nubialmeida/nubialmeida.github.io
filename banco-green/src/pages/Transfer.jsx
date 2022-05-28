import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Value from "../components/Transfer/Value";
import Destiny from "../components/Transfer/Destiny";
import Finish from "../components/Transfer/Finish";
import Comprovant from "../components/Transfer/Comprovant";
import "../styles/transfer.scss";
import * as API from "../api";
import Loading from "../components/Loading";

export default function Transfer() {
    const [stage, setStage] = useState(1);

    const [loading, setLoading] = useState(true);
    const [userBalance, setUserBalance] = useState({});
    const [allUsers, setAllUsers] = useState([]);
    const [valueToTransfer, setValueToTransfer] = useState("");
    const [destinyToTransfer, setDestinyToTransfer] = useState("");
    const [lastTransaction, setLastTransaction] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        async function apiRequest() {
            setAllUsers(await API.getAllAccounts());
            setUserBalance(await API.getBalance());
            setLoading(false);
        }
        apiRequest();
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="transfer">
                    {stage /* Para mudar de página sem fazer tudo*/}
                    <button
                        onClick={() => setStage(stage === 4 ? 1 : stage + 1)}
                    >
                        blabla
                    </button>
                    <Value
                        className={stage === 1 ? "" : "hidden"}
                        function={() => setStage(2)}
                        balance={userBalance}
                        valueToTransfer={valueToTransfer}
                        setValueToTransfer={(e) =>
                            setValueToTransfer(e.target.value)
                        }
                    />
                    <Destiny
                        className={stage === 2 ? "" : "hidden"}
                        function={() => setStage(3)}
                        allUsers={allUsers}
                        valueToTransfer={valueToTransfer}
                        destinyToTransfer={destinyToTransfer}
                        setDestinyToTransfer={(e) =>
                            setDestinyToTransfer(e.target.value)
                        }
                    />
                    <Finish
                        className={stage === 3 ? "" : "hidden"}
                        function={async () => {
                            setStage(4);
                            await API.createTransaction(
                                "12345678910", // colocar cpf do usuario que esta logado aqui
                                destinyToTransfer,
                                Number(valueToTransfer)
                            );
                            setLastTransaction(
                                await API.getLastTransactions("12345678910")
                            ); // aqui tbm
                        }}
                        valueToTransfer={valueToTransfer}
                        destinyToTransfer={destinyToTransfer}
                    />
                    <Comprovant
                        className={stage === 4 ? "" : "hidden"}
                        lastTransaction={lastTransaction}
                        valueToTransfer={valueToTransfer}
                        destinyToTransfer={destinyToTransfer}
                        setDefault={() => {
                            setDestinyToTransfer("");
                            setValueToTransfer();
                            navigate("/onboard");
                        }}
                    />
                </div>
            )}
        </>
    );
}
