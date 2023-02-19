import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HomeScreen = () => {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row text-rigth ">
          <h4 className="mb-5 mt-2 text-center"> Busca por marca </h4>
          <h5 className="mb-2 mt-2 text-secondary text-center"> Autos</h5>
          <div className="col-2"></div>
          <div className="col-8">
            <div className="row mb-4 mt-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/710x384_full_color/18bc580ce00c3c95/Acura.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Acura
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/74d84f9942a7d3e8/Alfa_Romeo.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Alfa Romeo
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/1088x384_full_color/0598fce6d069a5a0/Audi.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Audi
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/614861eca7caf1b4/BMW.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Bmw
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/938x384_full_color/26078ba5f8aba234/Cadillac.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Cadillac
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/820x384_full_color/1dd21e0781f0e450/Chevrolet.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Chevrolet
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/3658x384_full_color/f8a2454c744fb2af/Chrysler.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Chrysler
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/2751x384_full_color/0d87acfca3ddd404/Dodge.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Dodge
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/034e8804a56116b8/FIAT.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Fiat
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/991x384_full_color/588008e646f944ab/Ford.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Ford
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/1694x384_full_color/81e05d9044355a28/GMC.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Gmc
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/605x384_full_color/00fea4dbe4426fc2/Honda.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Honda
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/384x384_full_color/d88259cdbac929b7/Hyundai.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Hyundai
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/958x384_full_color/4c50d6932ea260bb/Jaguar.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Jaguar
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/974x384_full_color/a8fcfe1e70a37d25/Jeep.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Jeep
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/1629x384_full_color/638bbde84c5f569e/Kia.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Kia
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/722x384_full_color/2e9c24a2f6e9d190/Land_Rover.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Land Rover
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/543x384_full_color/c8d23de545755e0d/Lexus.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Lexus
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/389x384_full_color/c320eb8ddc97ecf7/Mazda.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Mazda
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/959be7e00726a9e0/Mercedes-Benz.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Mercedes-Benz
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/874x384_full_color/519add2e55e837af/MINI.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Mini
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/308x384_full_color/760f0043618e2330/Mitsubishi.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Mitsubishi
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/450x384_full_color/688cbf406361c9c1/Nissan.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Nissan
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/296x384_full_color/5505f9fd129ce1d5/Porsche.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Porche
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/689x384_full_color/43b494c614cd8ca3/Subaru.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Subaru
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/cf0bb1b2deca5e84/Toyota.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Toyota
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/384x384_full_color/2e91116c833bfded/Volkswagen.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Volkswagen
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/c39d70a40d578560/Volvo.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Volvo
                </span>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>

      <div className="container mt-5 ">
        <div className="row text-rigth ">
          <h5 className="mb-2 mt-2 text-secondary text-center"> Motos</h5>
          <div className="col-2"></div>
          <div className="col-8">
            <div className="row mb-4 mt-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/710x384_full_color/18bc580ce00c3c95/Acura.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Acura
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/74d84f9942a7d3e8/Alfa_Romeo.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Alfa Romeo
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/1088x384_full_color/0598fce6d069a5a0/Audi.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Audi
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/614861eca7caf1b4/BMW.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Bmw
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/938x384_full_color/26078ba5f8aba234/Cadillac.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Cadillac
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/820x384_full_color/1dd21e0781f0e450/Chevrolet.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Chevrolet
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/3658x384_full_color/f8a2454c744fb2af/Chrysler.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Chrysler
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/2751x384_full_color/0d87acfca3ddd404/Dodge.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Dodge
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/034e8804a56116b8/FIAT.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Fiat
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/991x384_full_color/588008e646f944ab/Ford.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Ford
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/1694x384_full_color/81e05d9044355a28/GMC.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Gmc
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/605x384_full_color/00fea4dbe4426fc2/Honda.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Honda
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/384x384_full_color/d88259cdbac929b7/Hyundai.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Hyundai
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/958x384_full_color/4c50d6932ea260bb/Jaguar.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Jaguar
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/974x384_full_color/a8fcfe1e70a37d25/Jeep.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Jeep
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/1629x384_full_color/638bbde84c5f569e/Kia.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Kia
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/722x384_full_color/2e9c24a2f6e9d190/Land_Rover.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Land Rover
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/543x384_full_color/c8d23de545755e0d/Lexus.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Lexus
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/389x384_full_color/c320eb8ddc97ecf7/Mazda.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Mazda
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/959be7e00726a9e0/Mercedes-Benz.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Mercedes-Benz
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/874x384_full_color/519add2e55e837af/MINI.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Mini
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/308x384_full_color/760f0043618e2330/Mitsubishi.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Mitsubishi
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/450x384_full_color/688cbf406361c9c1/Nissan.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Nissan
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/296x384_full_color/5505f9fd129ce1d5/Porsche.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Porche
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/689x384_full_color/43b494c614cd8ca3/Subaru.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Subaru
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/cf0bb1b2deca5e84/Toyota.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Toyota
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/384x384_full_color/2e91116c833bfded/Volkswagen.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Volkswagen
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/c39d70a40d578560/Volvo.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Volvo
                </span>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>

      <div className="container mt-5 ">
        <div className="row text-rigth ">
          <h5 className="mb-2 mt-2 text-secondary text-center"> Camiones</h5>
          <div className="col-2"></div>
          <div className="col-8">
            <div className="row mb-4 mt-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/710x384_full_color/18bc580ce00c3c95/Acura.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Acura
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/74d84f9942a7d3e8/Alfa_Romeo.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Alfa Romeo
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/1088x384_full_color/0598fce6d069a5a0/Audi.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Audi
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/614861eca7caf1b4/BMW.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Bmw
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/938x384_full_color/26078ba5f8aba234/Cadillac.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Cadillac
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/820x384_full_color/1dd21e0781f0e450/Chevrolet.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Chevrolet
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/3658x384_full_color/f8a2454c744fb2af/Chrysler.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Chrysler
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/2751x384_full_color/0d87acfca3ddd404/Dodge.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Dodge
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/034e8804a56116b8/FIAT.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Fiat
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/991x384_full_color/588008e646f944ab/Ford.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Ford
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/1694x384_full_color/81e05d9044355a28/GMC.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Gmc
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/605x384_full_color/00fea4dbe4426fc2/Honda.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Honda
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/384x384_full_color/d88259cdbac929b7/Hyundai.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Hyundai
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/958x384_full_color/4c50d6932ea260bb/Jaguar.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Jaguar
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/974x384_full_color/a8fcfe1e70a37d25/Jeep.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Jeep
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/1629x384_full_color/638bbde84c5f569e/Kia.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Kia
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/722x384_full_color/2e9c24a2f6e9d190/Land_Rover.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Land Rover
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/543x384_full_color/c8d23de545755e0d/Lexus.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Lexus
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/389x384_full_color/c320eb8ddc97ecf7/Mazda.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Mazda
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/959be7e00726a9e0/Mercedes-Benz.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Mercedes-Benz
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/874x384_full_color/519add2e55e837af/MINI.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Mini
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/308x384_full_color/760f0043618e2330/Mitsubishi.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Mitsubishi
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/450x384_full_color/688cbf406361c9c1/Nissan.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Nissan
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/296x384_full_color/5505f9fd129ce1d5/Porsche.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Porche
                </span>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/689x384_full_color/43b494c614cd8ca3/Subaru.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Subaru
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/cf0bb1b2deca5e84/Toyota.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Toyota
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo_text/384x384_full_color/2e91116c833bfded/Volkswagen.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Volkswagen
                </span>
              </div>
              <div className="col-3 text-rigth">
                <span>
                  <img
                    src={`https://static.tcimg.net/vehicles/logo/384x384_full_color/c39d70a40d578560/Volvo.png?fill=solid&fit=fill&h=30&w=30`}
                    alt={"logo"}
                    width=""
                    className="imgmovie"
                  />{" "}
                  Volvo
                </span>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
