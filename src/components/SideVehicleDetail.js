import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { TbClipboardText } from "react-icons/tb";
import { FaMotorcycle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { ImTruck } from "react-icons/im";
import { GiSailboat } from "react-icons/gi";
import { BiUser } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const SideVehicleDetail = () => {
  const { state } = useLocation();
  const vehicle = state.item;
  console.log("state: ", state);

  return (
    <div className="container vehicle-side-content">
      <div className="row ">
        <div className="col-12 ">
          <div className="d-flex cardtittle ps-3">
            <p className="year-tag">{vehicle.Year}</p>
            <p className="tittle-tag">{vehicle.Reference}</p>
          </div>
          <div className="price-container d-flex ps-3">
            <h3>
              <IoPricetagOutline />
            </h3>
            <h3 className="price-tag">{formatter.format(vehicle.Price)}</h3>
          </div>

          <div className="ps-3 price-container mb-4">
            <div className="location-container d-flex">
              <h5>
                <IoLocationOutline />
              </h5>
              <p className="price-tag">{vehicle.Location}</p>
            </div>
            <div className="other-tag d-flex">
              <h5>
                <IoSpeedometerOutline />
              </h5>
              <p className="price-tag">
                {numberWithCommas(vehicle.Km) + " km"}
              </p>
            </div>
            <div className="other-tag d-flex ">
              <h5>
                <TbClipboardText />
              </h5>
              <p className="price-tag">{vehicle.Brand}</p>
            </div>

            {vehicle.VehicleType == "Autos" ? (
              <div className="other-tag d-flex">
                <h5>
                  <FaCar />
                </h5>
                <p className="price-tag">{vehicle.BodyType}</p>
              </div>
            ) : null}
            {vehicle.VehicleType == "Motos" ? (
              <div className="other-tag d-flex">
                <h5>
                  <FaMotorcycle />
                </h5>
                <p className="price-tag">{vehicle.BodyType}</p>
              </div>
            ) : null}
            {vehicle.VehicleType == "Camiones" ? (
              <div className="other-tag d-flex">
                <h5>
                  <ImTruck />
                </h5>
                <p className="price-tag">{vehicle.BodyType}</p>
              </div>
            ) : null}
            {vehicle.VehicleType == "Botes" ? (
              <div className="other-tag d-flex">
                <h5>
                  <GiSailboat />
                </h5>
                <p className="price-tag">{vehicle.BodyType}</p>
              </div>
            ) : null}
          </div>

          <div className="ps-3 ">
            <div className="other-tag d-flex ">
              <h5>
                <BiUser />
              </h5>
              <p className="price-tag">{vehicle.Contactname}</p>
            </div>
            <div className="other-tag d-flex">
              <h5>
                <FaWhatsapp />
              </h5>
              <p className="price-tag">{vehicle.phoneNum}</p>
            </div>
            <div className="other-tag d-flex">
              <h5>
                <FaRegCommentDots />
              </h5>
              <p className="price-tag">{"Descripción:"}</p>
            </div>
            <div className="ps-3">{vehicle.Description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideVehicleDetail;
