import React, { useState, useEffect } from "react";
import OnboardComponent from "../components/FormComponents/Onboard";
import Loading from "../components/Loading";

const apiUrl = "http://localhost:3000";

export default function Onboard() {
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        /* async function getData() {
            const data = await fetch(apiUrl);
            const info = await data.json();
            setUserInfo(info);
        }
        getData(); */
        setLoading(false);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <OnboardComponent {...userInfo} />
                </div>
            )}
        </>
    );
}
