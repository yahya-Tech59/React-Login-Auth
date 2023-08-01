import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { Agents } from "./components/Agents";

export const App = () => {
  return (
    <div className="bg-zinc-200 h-screen pt-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agents" element={<Agents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
