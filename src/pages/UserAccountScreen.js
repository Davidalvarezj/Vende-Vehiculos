import React from "react";
import { Card, Col, Row, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoLocationOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { TbClipboardText } from "react-icons/tb";
import BeatLoader from "react-spinners/BeatLoader";
import { FaMotorcycle } from "react-icons/fa";
import { ImTruck } from "react-icons/im";
import { GiSailboat } from "react-icons/gi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";

import {
  fetchUserVehicle,
  fetchDeletePost,
} from "../utils/receiveDatafromFirestore";
import { deleteUserfiles } from "../utils/sendDatatoFirestore";

const UserAccountScreen = () => {
  let navigate = useNavigate();
  const userStore = useSelector((state) => state.user.userAuth);
  const [PostedVehicles, setPostedVehicles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteFlag, setDeleteFlag] = useState(false);
  const [selectedVehicle, setselectedVehicle] = useState({});
  const [loadingFlag, setloadingFlag] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    async function userVehicles() {
      try {
        let response = await fetchUserVehicle(userStore.email);
        console.log("response fetchUserVehicle: ", response);
        setPostedVehicles(response);
      } catch (error) {
        console.log(
          "Hay un Error Recepcion de Base de Datos del fetchUserVehicle(): ",
          error
        );
      }
    }
    userVehicles();
  }, []);

  async function handleNewRoute(item) {
    console.log("item: ", item);
    navigate(`/${item.PostId}`, { state: { item } });
  }
  async function hanndleDelete() {
    setloadingFlag(true);
    setDeleteFlag(false);
    try {
      console.log("delete item =>", selectedVehicle.documentid);
      await fetchDeletePost(selectedVehicle.documentid);
    } catch (error) {
      console.log("Hay un Error borrando datos:fetchDeletePost", error);
    }
    try {
      console.log("delete images =>", selectedVehicle.Image1Ref);
      await deleteUserfiles(selectedVehicle);
    } catch (error) {
      console.log("Hay un Error borrando fotos:deleteUserfiles", error);
    }
    setloadingFlag(false);
    setPostedVehicles(
      PostedVehicles.filter((elm) => elm.PostId != selectedVehicle.PostId)
    );
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <div>
              <h3>Mi cuenta</h3>
            </div>
            <div>{userStore?.email}</div>
          </div>
        </div>
      </div>

      <div className="container  ">
        <div className="row text-center ">
          <h4 className="mt-5 mb-5">Mis Publicaciones</h4>

          <div className="col-12">
            <Row xs={2} md={4} className="g-4">
              {PostedVehicles?.map((elm, index) => (
                <Col key={index}>
                  <Card className={"card-vehicle"}>
                    <Card.Img
                      variant="top"
                      src={elm.Image1}
                      height="150"
                      style={{ objectFit: "cover" }}
                      onClick={() => handleNewRoute(elm)}
                    />

                    <Card.Body>
                      <div onClick={() => handleNewRoute(elm)}>
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
                      </div>
                      <div className="mt-4 d-grid">
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => {
                            setShowModal(true);
                            setselectedVehicle(elm);
                            setDeleteFlag(true);
                          }}
                        >
                          <h3 className="">
                            <RiDeleteBin5Line />{" "}
                            <span className="mt-2 fs-5">Eliminar Anuncio</span>
                          </h3>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <>
        <Modal show={showModal} onHide={handleClose} centered={true}>
          {deleteFlag && (
            <>
              {" "}
              <Modal.Header closeButton>
                <Modal.Title>
                  <div className="container ">
                    <div className="row">
                      <div className="col">
                        <h4>Advertencia</h4>
                      </div>
                    </div>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Seguro deseas borrar este Anuncio!</p>
                <p className="fw-bold">{selectedVehicle?.Reference}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="danger" onClick={hanndleDelete}>
                  Borrar
                </Button>
              </Modal.Footer>
            </>
          )}

          {loadingFlag ? (
            <>
              {" "}
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5 className="text-center">Borrando archivos del servidor</h5>
                <div className="me-5 mb-5 text-center">
                  <BeatLoader
                    color={"#A6A6A6"}
                    loading={true}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    speedMultiplier={0.5}
                    cssOverride={{ margin: 20, marginLeft: 50 }}
                  />
                </div>
              </Modal.Body>
            </>
          ) : (
            !deleteFlag && (
              <>
                {" "}
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5 className="text-center">Publicacion eliminada!</h5>
                  <div className="h1  text-center">
                    <AiOutlineCheckCircle />
                  </div>
                </Modal.Body>
              </>
            )
          )}
        </Modal>
      </>
    </>
  );
};

export default UserAccountScreen;
