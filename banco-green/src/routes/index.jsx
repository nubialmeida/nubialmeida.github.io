import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Onboard, Home, NotFound, TermsOfUse, Transfer, Help, LandingPage, Cards } from "../pages";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/onboard" element={<Onboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/help" element={<Help />} />
            <Route path="/green-landing-page" element={<LandingPage />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
