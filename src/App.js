import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import { Routes, Route } from "react-router-dom";

import React from "react";
import Jumbo from "./components/Jumbo";
import Navbarmain from "./components/Navbarmain";
import SideFilter from "./components/SideFilter";
import HomeScreen from "./pages/HomeScreen";
import SearchScreen from "./pages/SearchScreen";
import MotosScreen from "./pages/MotosScreen";
import CamionesScreen from "./pages/CamionesScreen";
import UserAccountScreen from "./pages/UserAccountScreen";
import PublicarScreen from "./pages/PublicarScreen";
import VehicleInfoScreen from "./pages/VehicleInfoScreen";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Jumbo />
      <Navbarmain />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="account" element={<UserAccountScreen />} />
        <Route path="publicar" element={<PublicarScreen />} />
        <Route path="/:postId" element={<VehicleInfoScreen />} />
        <Route path="/search" element={<SearchScreen tabsearch="all" />} />
        <>
          <Route
            path="/search/autos"
            element={<SearchScreen tabsearch="autos" />}
          />
          <Route
            path="/search/autos/automovil"
            element={<SearchScreen tabsearch="autos/automovil" />}
          />
          <Route
            path="/search/autos/camioneta"
            element={<SearchScreen tabsearch="autos/camioneta" />}
          />
          <Route
            path="/search/autos/pickup"
            element={<SearchScreen tabsearch="autos/pickup" />}
          />
        </>
        <Route
          path="/search/motos"
          element={<SearchScreen tabsearch="motos" />}
        />
        <Route
          path="/search/motos/scooter"
          element={<SearchScreen tabsearch="motos/scooter" />}
        />
        <Route
          path="/search/motos/calle"
          element={<SearchScreen tabsearch="motos/calle" />}
        />
        <Route
          path="/search/motos/touring"
          element={<SearchScreen tabsearch="motos/touring" />}
        />
        <Route
          path="/search/motos/off-road"
          element={<SearchScreen tabsearch="motos/off-road" />}
        />
        <Route
          path="/search/motos/cuatrimoto"
          element={<SearchScreen tabsearch="motos/cuatrimoto" />}
        />

        <Route
          path="/search/camiones"
          element={<SearchScreen tabsearch="camiones" />}
        />
        <Route
          path="/search/camiones/volquetas"
          element={<SearchScreen tabsearch="camiones/volquetas" />}
        />
        <Route
          path="search/camiones/buses"
          element={<SearchScreen tabsearch="camiones/buses" />}
        />
        <Route
          path="search/camiones/camiones"
          element={<SearchScreen tabsearch="camiones/camiones" />}
        />
        <Route
          path="/search/camiones/maquinaria"
          element={<SearchScreen tabsearch="camiones/maquinaria" />}
        />

        <Route
          path="/search/botes"
          element={<SearchScreen tabsearch="botes" />}
        />
        <Route
          path="/search/botes/yates"
          element={<SearchScreen tabsearch="botes/yates" />}
        />
        <Route
          path="/search/botes/lanchas"
          element={<SearchScreen tabsearch="botes/lanchas" />}
        />
        <Route
          path="/search/botes/veleros"
          element={<SearchScreen tabsearch="botes/veleros" />}
        />
        <Route
          path="/search/botes/motoacuatica"
          element={<SearchScreen tabsearch="botes/motoacuatica" />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
