import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./page/App.jsx";
import Register from "./page/Register.jsx"
import Login from "./page/Login.jsx"
import SuccessRegist from "./page/SuccessRegist.jsx";
import Profile from "./page/Profile.jsx";
import Camera from "./page/Camera.jsx";
import Home from "./page/Home.jsx";
import './page/index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<SuccessRegist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
