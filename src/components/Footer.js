import React from "react";
import Logo from "../img/Logo3.png";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";
import { FaTwitterSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  let navigate = useNavigate();

  return (
    <div className={"jumbotron-fluid footer-main pt-5 pb-5"}>
      <Container className="">
        <div className="row row-footer">
          <div className="col text-center">
            <div className="footer-social">
              <FaFacebookSquare className="m-2" />
              <TfiYoutube className="m-2" />
              <FiInstagram className="m-2" />
              <FaTwitterSquare className="m-2" />
            </div>
          </div>
        </div>
        <div className="row row-footer-end mt-2">
          <h2
            className="text-center text-footer-link"
            onClick={() => {
              navigate(`/`);
              window.scrollTo(0, 0);
            }}
          >
            www.vendevehiculos.com
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
