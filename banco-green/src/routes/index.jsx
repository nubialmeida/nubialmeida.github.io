import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Onboard, Home, NotFound, TermsOfUse, Transfer } from "../pages";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/onboard" element={<Onboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
