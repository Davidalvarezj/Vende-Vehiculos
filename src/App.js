import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Jumbo from "./components/Jumbo";
import Navbarmain from "./components/Navbarmain";
import HomeScreen from "./pages/HomeScreen";
import CarsScreen from "./pages/CarsScreen";
import Footer from "./components/Footer";
import SigninScreen from "./pages/SigninScreen";
import UserAcountScreen from "./pages/UserAcountScreen";

function App() {
  return (
    <>
      <Jumbo />
      <Navbarmain />
      <SigninScreen />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="cars" element={<CarsScreen />} />
        <Route path="signin" element={<SigninScreen />} />
        <Route path="acount" element={<UserAcountScreen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
