import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import GoogleButton from "react-google-button";
import { FaUserAlt } from "react-icons/fa";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebaseconfig";

const SignUpModal = (props) => {
  const [showloginform, setShowloginform] = React.useState(false);

  const handllallreadyregister = () => {
    console.log("Ya estoy registrado...");
  };

  async function googlelogin() {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);
    console.log("se undio botton de login...");
    console.log(response);
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row mb-3">
            <p>
              Regístrese con su dirección de correo electrónico o continúe
              iniciando sesión con su cuenta de Facebook o Google.
            </p>
          </div>
          <div className="row m-3"></div>
          <div className="row m-3">
            <Button
              className="ms-2"
              variant="outline-success"
              onClick={handllallreadyregister}
            >
              <span className="text-primary">Crear Nueva cuenta con Email</span>
            </Button>
          </div>
          <div className="row m-3">
            <Button
              className="ms-2"
              variant="outline-success"
              onClick={googlelogin}
            >
              <span className="text-primary">Continuar con Google</span>
            </Button>
          </div>
          <div className="row m-3">
            <Button
              className="ms-2"
              variant="outline-success"
              onClick={handllallreadyregister}
            >
              <span className="text-primary">Continuar Facebook</span>
            </Button>
          </div>
          <div className="row m-3 mt-5">
            <Button
              className="ms-2"
              variant="link"
              onClick={handllallreadyregister}
            >
              <span className="text-primary">Ya tienes cuenta?</span>
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignUpModal;
