import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import GoogleButton from "react-google-button";
import { FaUserAlt } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import Form from "react-bootstrap/Form";

import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebaseconf";

const SignUpModal = (props) => {
  const [showloginform, setShowloginform] = useState(false);
  const [showSuccesAuth, setShowSuccesAuth] = useState(false);
  const [showregisteredform, setShowregisteredform] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorNewlogin, setErrorNewlogin] = useState(null);
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [registeredPassword, setRegisteredPassword] = useState("");
  const [errorRegisteredlogin, setErrorRegisteredlogin] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      props.setuser(currentUser);
      console.log("currentUser", currentUser);
      if (currentUser) {
        setShowSuccesAuth(true);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    setShowloginform(false);
    setShowregisteredform(false);
    setErrorNewlogin(null);
    setErrorRegisteredlogin(null);
  }, [props.show]);

  const logOut = async () => {
    console.log("Loggin OUT...");
    try {
      await signOut(auth);
      props.onHide();
      setShowSuccesAuth(false);
    } catch (error) {
      console.log("Error Logout, ", error);
    }
    console.log("user: ", props.user?.displayName);
  };

  const handllallreadyregister = () => {
    console.log("Ya estoy registrado...");
    setShowloginform(false);
    setErrorNewlogin(null);
    setShowregisteredform(true);
  };

  async function googlelogin() {
    const provider = new GoogleAuthProvider();
    try {
      // const response = await signInWithRedirect(auth, provider);
      const response = await signInWithPopup(auth, provider);
      console.log("Se aprovo la Auth...", response);
      setShowSuccesAuth(true);
    } catch (error) {
      console.log("Error en la Autht, ", error);
    }
  }

  async function handlleSignInAllreadyRegistered(e) {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        registeredEmail,
        registeredPassword
      );
      console.log("Se aprovo la Auth...", response);
      setShowSuccesAuth(true);
    } catch (error) {
      console.log("Error en la Autht, ", error);
      setErrorRegisteredlogin(error.message);
    }
  }

  async function newUserCreation(e) {
    e.preventDefault();
    console.log("Inicio creacion de usuario...", newEmail, newPassword);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        newEmail,
        newPassword
      );
      console.log("Se aprovo nuevo usuario. ", response);
      setShowSuccesAuth(true);
    } catch (error) {
      console.log("Error en creacion usuario, ", error.message);
      setErrorNewlogin(error.message);
    }
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
        {showSuccesAuth ? (
          <div className="container">
            <div className="row mb-3">
              <h1 className="text-sm-center">
                <GiPartyPopper />
              </h1>

              <h3 className="mt-4 text-sm-center">Bienvenido!</h3>
              <h6 className="mt-2 text-sm-center">
                {" "}
                {props.user?.displayName
                  ? props.user.displayName
                  : props.user.email}
              </h6>

              <p className="mt-5 mb-5">
                Acabas de desbloquear todas las herramientas que necesitarás
                para que comprar y vender un vehículo sea más fácil que nunca.
              </p>
            </div>
            <div className="row m-3 mt-2">
              <Button
                className="ms-2 mb-4"
                variant="primary"
                onClick={() => props.onHide()}
              >
                Continuar
              </Button>
              <Button className="ms-2" variant="link" onClick={() => logOut()}>
                <span className="text-primary">Log Out</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row mb-2">
              <p>
                Regístrese con su dirección de correo electrónico o continúe
                iniciando sesión con su cuenta de Facebook o Google.
              </p>
            </div>
            {showregisteredform ? (
              <Form className="mb-5" onSubmit={handlleSignInAllreadyRegistered}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setRegisteredEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setRegisteredPassword(e.target.value)}
                  />
                </Form.Group>
                <p className="mt-2 text-danger">{errorRegisteredlogin}</p>
                <Button variant="success" type="submit">
                  Iniciar Sesión
                </Button>
                <div className="border-top my-5"></div>
              </Form>
            ) : null}

            {showloginform ? (
              <Form className="mb-5" onSubmit={newUserCreation}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Form.Group>
                <p className="mt-2 text-danger">{errorNewlogin}</p>
                <Button variant="primary" type="submit">
                  Crear Nuevo Usuario
                </Button>

                <div className="border-top my-5"></div>
              </Form>
            ) : (
              <div className="row m-3 mt-3">
                <Button
                  className="ms-2"
                  variant="outline-success"
                  onClick={() => {
                    setShowloginform(true);
                    setShowregisteredform(false);
                  }}
                >
                  <span className="text-primary">Crear Nueva cuenta</span>
                </Button>
              </div>
            )}

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

            {!showregisteredform ? (
              <div className="row m-3 mt-5">
                <Button
                  className="ms-2"
                  variant="link"
                  onClick={handllallreadyregister}
                >
                  <span className="text-primary">Ya tienes cuenta?</span>
                </Button>
              </div>
            ) : null}
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default SignUpModal;
