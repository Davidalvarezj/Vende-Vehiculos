import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import "./SideFilter.css";

const SideFilter = ({
  Data,
  DataTemp,
  setDataTemp,
  VehicleType,
  setVehicleType,
  BodyType,
  setBodyType,
  ResetFilter,
  setResetFilter,
  Location,
  setLocation,
  Brand,
  setBrand,
  Year,
  setYear,
  Price,
  setPrice,
  Km,
  setKm,
  handleVehicleType,
}) => {
  const [runfilter, setrunfilter] = useState(false);

  useEffect(() => {
    runfilters();
  }, [Location, Brand, BodyType, Year, Km, Price]);

  function runfilters() {
    const arrayFilter1 = filter_BodyType();
    const arrayFilter2 = filter_Year(arrayFilter1);
    const arrayFilter3 = filter_Km(arrayFilter2);
    const arrayFilter4 = filter_Price(arrayFilter3);
    const arrayFilter5 = filter_Location(arrayFilter4);
    const arrayFilter6 = filter_Brand(arrayFilter5);
    setDataTemp(arrayFilter6);
  }
  function filter_BodyType() {
    if (BodyType != "Todos") {
      return Data?.filter((elm) => elm.BodyType == BodyType);
    } else {
      return Data;
    }
  }
  function filter_Year(arr) {
    if (Year != "Todos") {
      return arr?.filter((elm) => elm.Year == Year);
    } else {
      return arr;
    }
  }
  function filter_Km(arr) {
    return arr?.filter((elm) => elm.Km < Km);
  }
  function filter_Price(arr) {
    return arr?.filter((elm) => elm.Price < Price);
  }

  function filter_Location(arr) {
    if (Location != "Todos") {
      return arr?.filter((elm) => elm.Location == Location);
    } else {
      return arr;
    }
  }
  function filter_Brand(arr) {
    if (Brand != "Todos") {
      return arr?.filter((elm) => elm.Brand == Brand);
    } else {
      return arr;
    }
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (ResetFilter) {
    setResetFilter(false);
    handleSummit();
  }

  function handleSummit(e) {
    e?.preventDefault();
    setVehicleType("Todos");
    setLocation("Todos");
    setBodyType("Todos");
    setBrand("Todos");
    setYear("Todos");
    setPrice(500000000);
    setKm(200000);
    setDataTemp(Data);
  }

  return (
    <div className="container container-main ">
      <div className="row ">
        <div className="col">
          <div className="">
            <div className="row">
              <div className="col m-2 filter-container">
                <Form>
                  <Form.Group
                    as={Col}
                    className="mb-4"
                    controlId="tipovehiculoID"
                  >
                    <Form.Label column sm={12}>
                      Tipo de vehículo:
                    </Form.Label>
                    <Col sm={12}>
                      <Form.Select
                        value={VehicleType}
                        onChange={(e) => {
                          setVehicleType(e.target.value);
                          handleVehicleType(e.target.value);
                          handleSummit();
                        }}
                      >
                        <option value="Todos">Todos</option>
                        <option value="Autos">Autos</option>
                        <option value="Motos">Motos</option>
                        <option value="Camiones">Camiones</option>
                        <option value="Botes">Botes</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Col} className="mb-4" controlId="locationID">
                    <Form.Label column sm={12}>
                      Ubicación:
                    </Form.Label>
                    <Col sm={12}>
                      <Form.Select
                        value={Location}
                        onChange={(e) => setLocation(e.target.value)}
                      >
                        <option value="Todos">Todos</option>
                        <option value="Amazonas">Amazonas</option>
                        <option value="Antioquia">Antioquia</option>
                        <option value="Arauca">Arauca</option>
                        <option value="Atlántico">Atlántico</option>
                        <option value="Bogotá">Bogotá</option>
                        <option value="Bolívar">Bolívar</option>
                        <option value="Boyacá">Boyacá</option>
                        <option value="Caldas">Caldas</option>
                        <option value="Caquetá">Caquetá</option>
                        <option value="Casanare">Casanare</option>
                        <option value="Cauca">Cauca</option>
                        <option value="Cesar">Cesar</option>
                        <option value="Chocó">Chocó</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Cundinamarca">Cundinamarca</option>
                        <option value="Guainía">Guainía</option>
                        <option value="Guaviare">Guaviare</option>
                        <option value="Huila">Huila</option>
                        <option value="Guajira">Guajira</option>
                        <option value="Magdalena">Magdalena</option>
                        <option value="Meta">Meta</option>
                        <option value="Nariño">Nariño</option>
                        <option value="Norte de Santander">
                          Norte de Santander
                        </option>
                        <option value="Putumayo">Putumayo</option>
                        <option value="Quindío">Quindío</option>
                        <option value="San Andrés y Providencia">
                          San Andrés y Providencia
                        </option>
                        <option value="Santander">Santander</option>
                        <option value="Sucre">Sucre</option>
                        <option value="Tolima">Tolima</option>
                        <option value="Valle del Cauca">Valle del Cauca</option>
                        <option value="Vaupés">Vaupés</option>
                        <option value="Vichada">Vichada</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Col} className="mb-4" controlId="brandID">
                    <Form.Label column sm={12}>
                      Marca
                    </Form.Label>
                    <Col sm={12}>
                      <Form.Select
                        value={Brand}
                        onChange={(e) => setBrand(e.target.value)}
                      >
                        <option value="Todos">Todos</option>
                        {VehicleType == "Autos" && (
                          <>
                            <option value="Acura">Acura</option>
                            <option value="Alfa Romeo">Alfa Romeo</option>
                            <option value="Audi">Audi</option>
                            <option value="Bmw">Bmw</option>
                            <option value="Cadillac">Cadillac</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="Dodge">Dodge</option>
                            <option value="Ferrari">Ferrari</option>
                            <option value="Fiat">Fiat</option>
                            <option value="Ford">Ford</option>
                            <option value="Gmc">Gmc</option>
                            <option value="Honda">Honda</option>
                            <option value="Jaguar">Jaguar</option>
                            <option value="Jeep">Jeep</option>
                            <option value="Kia">Kia</option>
                            <option value="Lamborghini">Lamborghini</option>
                            <option value="Land Rover">Land Rover</option>
                            <option value="Lexus">Lexus</option>
                            <option value="Mazda">Mazda</option>
                            <option value="Merzedes Benz">Merzedes Benz</option>
                            <option value="Mini">Mini </option>
                            <option value="Mitsubishi">Mitsubishi </option>
                            <option value="Nissan">Nissan </option>
                            <option value="Porsche">Porsche </option>
                            <option value="Subaru">Subaru </option>
                            <option value="Tesla">Tesla </option>
                            <option value="Toyota">Toyota </option>
                            <option value="Volkswagen">Volkswagen </option>
                            <option value="Volvo">Volvo </option>
                            <option value="Otro">Otro </option>
                          </>
                        )}
                        {VehicleType == "Motos" && (
                          <>
                            <option value="Akt ">Akt </option>
                            <option value="Auteco">Auteco</option>
                            <option value="Bmw">Bmw</option>
                            <option value="Benelli">Benelli</option>
                            <option value="Beta">Beta</option>
                            <option value="Can-Am">Can-Am</option>
                            <option value="Ducati">Ducati</option>
                            <option value="Electric Motor">
                              Electric Motor
                            </option>
                            <option value="Gas Gas">Gas Gas</option>
                            <option value="Harley Davidson">
                              Harley Davidson
                            </option>
                            <option value="Honda">Honda</option>
                            <option value="Husqvarna">Husqvarna</option>
                            <option value="Hero ">Hero </option>
                            <option value="Husaberg">Husaberg</option>
                            <option value="Kawasaki">Kawasaki</option>
                            <option value="KTM">KTM</option>
                            <option value="Kymco">Kymco </option>
                            <option value="Lambretta">Lambretta </option>
                            <option value="Opel">Opel </option>
                            <option value="Piaggio">Piaggio </option>
                            <option value="Royal Enfield">
                              Royal Enfield{" "}
                            </option>
                            <option value="Sherco">Sherco </option>
                            <option value="Suzuki">Suzuki </option>
                            <option value="Triumph ">Triumph </option>
                            <option value="Victory">Victory </option>
                            <option value="Yamaha">Yamaha </option>
                            <option value="Zero">Zero </option>
                            <option value="Otro">Otro </option>
                          </>
                        )}
                        {VehicleType == "Camiones" && (
                          <>
                            <option value="Audi">Audi</option>
                            <option value="Agrale">Agrale</option>
                            <option value="Bmw">Bmw</option>
                            <option value="Caterpillar ">Caterpillar </option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="Daf">Daf</option>
                            <option value="Dodge">Dodge </option>
                            <option value="Ford">Ford </option>
                            <option value="Freightliner">Freightliner</option>
                            <option value="Gmc">Gmc </option>
                            <option value="Hino">Hino</option>
                            <option value="Isuzu">Isuzu</option>
                            <option value="Iveco">Iveco</option>
                            <option value="Kenworth">Kenworth</option>
                            <option value="Mack">Mack</option>
                            <option value="Mercedes Benz">Mercedes Benz</option>
                            <option value="Mitsubishi">Mitsubishi</option>
                            <option value="Navistar">Navistar </option>
                            <option value="Rfw">Rfw</option>
                            <option value="Subaru">Subaru </option>
                            <option value="Toyota">Toyota </option>
                            <option value="Tesla Motors">Tesla Motors </option>
                            <option value="Volvo">Volvo</option>
                            <option value="Volkswagen">Volkswagen</option>
                            <option value="Otro">Otro </option>
                          </>
                        )}
                        {VehicleType == "Botes" && (
                          <>
                            <option value="AB Inflatables ">
                              AB Inflatables{" "}
                            </option>
                            <option value="Antaris">Antaris</option>
                            <option value="Alumaweld">Alumaweld</option>
                            <option value="Arcadia Yachts">
                              Arcadia Yachts
                            </option>
                            <option value="Aquador">Aquador</option>
                            <option value="Barracuda">Barracuda</option>
                            <option value="BlackWater">BlackWater</option>
                            <option value="Blazer">Blazer</option>
                            <option value="BlackJack">BlackJack</option>
                            <option value="Caymas">Caymas</option>
                            <option value="Cobalt">Cobalt</option>
                            <option value="Catamaran">Catamaran</option>
                            <option value="Compass">Compass</option>
                            <option value="Deep Impact">Deep Impact</option>
                            <option value="Dominator">Dominator</option>
                            <option value="Everglades">Everglades</option>
                            <option value="Explorer">Explorer</option>
                            <option value="Fisher">Fisher</option>
                            <option value="Finseeker">Finseeker </option>
                            <option value="Goldfish">Goldfish </option>
                            <option value="Gibson">Gibson</option>
                            <option value="Hurricane">Hurricane </option>
                            <option value="Northstar">Northstar </option>
                            <option value="Ocean Yachts">Ocean Yachts </option>
                            <option value="Phoenix">Phoenix </option>
                            <option value="Quicksilver">Quicksilver </option>
                            <option value="Sportsman">Sportsman </option>
                            <option value="Sunfish">Sunfish </option>
                            <option value="Yamaha">Yamaha </option>
                            <option value="Zodiac">Zodiac </option>
                            <option value="Otro">Otro </option>
                          </>
                        )}
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Col} className="mb-4" controlId="bodyID">
                    <Form.Label column sm={12}>
                      Tipo de Carroseria
                    </Form.Label>
                    <Col sm={12}>
                      <Form.Select
                        value={BodyType}
                        onChange={(e) => setBodyType(e.target.value)}
                      >
                        <option value="Todos">Todos</option>
                        {VehicleType == "Autos" && (
                          <>
                            <option value="Automovil">Automovil</option>
                            <option value="Camioneta">Camioneta</option>
                            <option value="Pick-Up">Pick-Up</option>
                            <option value="Otro">Otro</option>
                          </>
                        )}
                        {VehicleType == "Motos" && (
                          <>
                            <option value="Calle">Calle</option>
                            <option value="Touring">Touring</option>
                            <option value="Off-road">Off-road</option>
                            <option value="Cuatrimoto">Cuatrimoto</option>
                            <option value="Scooter">Scooter</option>
                            <option value="Otro">Otro</option>
                          </>
                        )}
                        {VehicleType == "Camiones" && (
                          <>
                            <option value="Bus">Bus</option>
                            <option value="Camion">Camion</option>
                            <option value="Maquinaria pesada">
                              Maquinaria pesada
                            </option>
                            <option value="Otro">Otro</option>
                          </>
                        )}
                        {VehicleType == "Botes" && (
                          <>
                            <option value="Yate">Yate</option>
                            <option value="Lancha">Lancha</option>
                            <option value="Moto acuatica">Moto acuatica</option>
                            <option value="Velero">Velero</option>
                            <option value="Otro">Otro</option>
                          </>
                        )}
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Col} className="mb-4" controlId="yearID">
                    <Form.Label column sm={12}>
                      Modelo:
                    </Form.Label>
                    <Col sm={12}>
                      <Form.Select
                        value={Year}
                        onChange={(e) => setYear(e.target.value)}
                      >
                        <option value={"Todos"}>Todos</option>
                        <option value={2024}>2024</option>
                        <option value={2023}>2023</option>
                        <option value={2022}>2022</option>
                        <option value={2021}>2021</option>
                        <option value={2020}>2020</option>
                        <option value={2019}>2019</option>
                        <option value={2018}>2018</option>
                        <option value={2017}>2017</option>
                        <option value={2016}>2016</option>
                        <option value={2015}>2015</option>
                        <option value={2014}>2014</option>
                        <option value={2013}>2013</option>
                        <option value={2012}>2012</option>
                        <option value={2011}>2011</option>
                        <option value={2010}>2010</option>
                        <option value={2009}>2009</option>
                        <option value={2008}>2008</option>
                        <option value={2007}>2007</option>
                        <option value={2006}>2006 </option>
                        <option value={2005}>2005 </option>
                        <option value={2004}>2004 </option>
                        <option value={2003}>2003 </option>
                        <option value={2002}>2002 </option>
                        <option value={2001}>2001 </option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Label>Km: {numberWithCommas(Km)}</Form.Label>

                  <Form.Range
                    value={Km / 2000}
                    onChange={(e) => setKm(e.target.value * 2000)}
                  />
                  <Form.Label className="mt-2">
                    Precio: {formatter.format(Price)}
                  </Form.Label>
                  <Form.Range
                    value={Price / 5000000}
                    onChange={(e) => setPrice(e.target.value * 5000000)}
                  />
                  <div className="d-grid gap-2">
                    <Button
                      variant="secondary"
                      size="md"
                      type="submit"
                      onClick={(e) => handleSummit(e)}
                      className="mt-4"
                    >
                      Reset
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
