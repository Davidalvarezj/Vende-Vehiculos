import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import PublicationForm from "../components/PublicationForm";
import PostModal from "../components/PostModal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PublicarScreen = () => {
  const [loading, setLoading] = useState(false);
  const [newPost, setNewPost] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const userStore = useSelector((state) => state.user.userAuth);

  return (
    <div className="container">
      {userStore ? (
        <div className="row mt-5">
          <h4 className="mb-5">Crear nueva publicación</h4>
          <div className="col mb-5">
            <PublicationForm
              loading={loading}
              setLoading={setLoading}
              setModalShow={setModalShow}
            />
            <PostModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <div className="row mt-5">
          <h4 className="mb-5">Crear nueva publicación</h4>
          <div className="col d-flex ms-5">
            <h1>
              <MdOutlineDoNotDisturbOn />
            </h1>
            <h5 className="pt-3 ms-3">
              Debes iniciar sesión para tener acceso a la creacion de anuncios
            </h5>
          </div>
        </div>
      )}

      <div className="row mt-5 mb-5"></div>
    </div>
  );
};

export default PublicarScreen;
