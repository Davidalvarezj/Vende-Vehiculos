import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SideFilter from "../components/SideFilter";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { receiveData, fakedata } from "../utils/receiveDatafromFirestore";
import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { TbClipboardText } from "react-icons/tb";
import { FaMotorcycle } from "react-icons/fa";
import { ImTruck } from "react-icons/im";
import { GiSailboat } from "react-icons/gi";

import "./SearchScreen.css";

export default function SearchScreen({ tabsearch }) {
  console.log("tabsearch: ", tabsearch);

  const [Data, setData] = useState([]);
  const [DataTemp, setDataTemp] = useState([]);
  let navigate = useNavigate();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  async function handleNewRoute(item) {
    console.log("item: ", item);
    navigate(`/${item.PostId}`, { state: { item } });
  }

  useEffect(() => {
    async function fetchData() {
      console.log("useEffect asking for data...");
      try {
        let response = await receiveData(tabsearch);

        console.log("response: ", response);
        setData(response);
        setDataTemp(response);
      } catch (error) {
        console.log("Hay un Error Recepcion de Base de Datos: ", error);
      }
    }
    fetchData();
  }, [tabsearch]);

  return (
    <>
      <p>{tabsearch}</p>
      <div className="container main-content">
        <div className="row g-1">
          <div className="col-12 col-md-3">
            <SideFilter Data={Data} setDataTemp={setDataTemp} />
          </div>
          <div className="col-12 col-md-9 mt-3">
            <h4 className="results-tag">
              Resultados:{" "}
              <span className="results-span"> {DataTemp.length} </span>
            </h4>
            <Row xs={1} md={3} className="g-3">
              {DataTemp.map((elm, index) => (
                <Col key={index}>
                  <Card
                    className={"mousepointer"}
                    onClick={() => handleNewRoute(elm)}
                  >
                    <Card.Img
                      variant="top"
                      src={elm.Image1}
                      height="150"
                      style={{ objectFit: "cover" }}
                    />

                    <Card.Body>
                      <Card.Title>
                        <div className="d-flex cardtittle">
                          <p className="year-tag">{elm.Year}</p>
                          <p className="tittle-tag">{elm.Reference}</p>
                        </div>
                      </Card.Title>
                      <div className="price-container d-flex">
                        <h5>
                          <IoPricetagOutline />
                        </h5>
                        <h6 className="price-tag">
                          {formatter.format(elm.Price)}
                        </h6>
                      </div>
                      <div className="location-container d-flex">
                        <h5>
                          <IoLocationOutline />
                        </h5>
                        <p className="price-tag">{elm.Location}</p>
                      </div>
                      <div className="other-tag d-flex">
                        <h5>
                          <IoSpeedometerOutline />
                        </h5>
                        <p className="price-tag">
                          {numberWithCommas(elm.Km) + " km"}
                        </p>
                      </div>
                      <div className="other-tag d-flex ">
                        <h5>
                          <TbClipboardText />
                        </h5>
                        <p className="price-tag">{elm.Brand}</p>
                      </div>

                      {elm.VehicleType == "Autos" ? (
                        <div className="other-tag d-flex">
                          <h5>
                            <FaCar />
                          </h5>
                          <p className="price-tag">{elm.BodyType}</p>
                        </div>
                      ) : null}
                      {elm.VehicleType == "Motos" ? (
                        <div className="other-tag d-flex">
                          <h5>
                            <FaMotorcycle />
                          </h5>
                          <p className="price-tag">{elm.BodyType}</p>
                        </div>
                      ) : null}
                      {elm.VehicleType == "Camiones" ? (
                        <div className="other-tag d-flex">
                          <h5>
                            <ImTruck />
                          </h5>
                          <p className="price-tag">{elm.BodyType}</p>
                        </div>
                      ) : null}
                      {elm.VehicleType == "Botes" ? (
                        <div className="other-tag d-flex">
                          <h5>
                            <GiSailboat />
                          </h5>
                          <p className="price-tag">{elm.BodyType}</p>
                        </div>
                      ) : null}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
