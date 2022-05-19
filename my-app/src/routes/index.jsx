import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Register, Login, Onboard, Home, NotFound } from "../pages";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/onboard" element={<Onboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
