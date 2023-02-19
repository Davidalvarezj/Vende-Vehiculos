import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import { Routes, Route } from "react-router-dom";

import React from "react";
import Jumbo from "./components/Jumbo";
import Navbarmain from "./components/Navbarmain";
import SideFilter from "./components/SideFilter";
import HomeScreen from "./pages/HomeScreen";
import CarsScreen from "./pages/CarsScreen";
import MotosScreen from "./pages/MotosScreen";
import CamionesScreen from "./pages/CamionesScreen";
import UserAccountScreen from "./pages/UserAccountScreen";
import PublicarScreen from "./pages/PublicarScreen";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Jumbo />
      <Navbarmain />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="carros" element={<CarsScreen />} />
        <Route path="motos" element={<MotosScreen />} />
        <Route path="camiones" element={<CamionesScreen />} />
        <Route path="account" element={<UserAccountScreen />} />
        <Route path="publicar" element={<PublicarScreen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
