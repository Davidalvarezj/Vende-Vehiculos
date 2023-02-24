import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BeatLoader from "react-spinners/BeatLoader";
import React from "react";
import { IoCloudDone } from "react-icons/io5";

function PostModal({ show, onHide, loading }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      {loading ? (
        <Modal.Body>
          <h4 className="mb-5">Creando nueva publicación</h4>
          <div className="ms-1 mb-5 ">
            <BeatLoader
              color={"#A6A6A6"}
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
              speedMultiplier={0.5}
              cssOverride={{ margin: 20, marginLeft: 50 }}
            />
          </div>
        </Modal.Body>
      ) : (
        <Modal.Body>
          <h4>Publicación creada satisfactoriamente!</h4>
          <div className="display-1 ms-5">
            <IoCloudDone />
          </div>
        </Modal.Body>
      )}

      <Modal.Footer>
        <Button onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PostModal;
