import React, { useState, useEffect } from "react";
import OnboardComponent from "../components/FormComponents/Onboard";
import Loading from "../components/Loading";
import * as API from "../api";

export default function Onboard() {
    const [userBalance, setUserBalance] = useState({});
    const [userTransactions, setUserTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function apiRequest() {
            setUserBalance(await API.getBalance());
            setUserTransactions(await API.getTransactions());
            setLoading(false);
        }
        apiRequest();
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <OnboardComponent {...{ userBalance, userTransactions }} />
            )}
        </>
    );
}
