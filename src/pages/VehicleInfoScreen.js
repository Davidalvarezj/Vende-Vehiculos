import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { TbClipboardText } from "react-icons/tb";
import { FaMotorcycle } from "react-icons/fa";
import { ImTruck } from "react-icons/im";
import { GiSailboat } from "react-icons/gi";
import DetailModal from "../components/DetailModal";

import SideVehicleDetail from "../components/SideVehicleDetail";
import "./VehicleInfoScreen.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
function numberWithCommas(x) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const VehicleInfoScreen = () => {
  const { state } = useLocation();
  const vehicle = state?.item;

  const [modal, setModal] = useState(false);

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <h5 className="results-tag mb-3">{vehicle?.VehicleType}</h5>
        <h2>{vehicle?.Reference}</h2>
        <div className="d-flex ">
          <p className="me-2">Modelo:</p>
          <p className="year-tag ">{vehicle?.Year}</p> <p className="ms-1">|</p>
          <h5 className="ms-3 icon-km-correction">
            <IoSpeedometerOutline />
          </h5>
          <p className="ms-2">{numberWithCommas(vehicle?.Km) + " km"}</p>
        </div>
      </div>
      <div className="row ">
        <div
          className="col-12 col-md-9 mousepointer"
          onClick={() => setModal(!modal)}
        >
          <div className="row mb-3">
            <div className="col">
              <img
                className="imagebg img-fluid"
                src={vehicle?.Image1}
                alt="Image 1"
              />
            </div>
          </div>
          <div className="row d-none d-md-flex">
            <div className="col-12 col-md-4">
              <img
                className="image1 img-fluid"
                src={vehicle?.Image2}
                alt="Image 1"
              />
            </div>
            <div className="col-12 col-md-4">
              <img
                className="image1 img-fluid"
                src={vehicle?.Image3}
                alt="Image 1"
              />
            </div>
            <div className="col-12 col-md-4">
              <img
                className="image1 img-fluid"
                src={vehicle?.Image4}
                alt="Image 1"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <SideVehicleDetail />
        </div>
      </div>
      <DetailModal modal={modal} setModal={setModal} />
    </div>
  );
};

export default VehicleInfoScreen;
