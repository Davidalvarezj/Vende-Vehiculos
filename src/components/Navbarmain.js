import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/userSlice";
import { useEffect } from "react";
import Logo from "../img/Logo3.png";
import { FaUserAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import SignUpModal from "./signin-modals/SignUpModal";
import { SearchData } from "../utils/receiveDatafromFirestore";

function Navbarmain() {
  const [modalShowSignUP, setModalShowSignUP] = React.useState(false);
  const [user, setuser] = React.useState({});
  const [logoutrun, setLogoutrun] = React.useState(false);
  const [searchKey, setsearchKey] = React.useState("");
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.user.userAuth);
  // console.log("userStore Navbar: ", userStore);
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(addUser(user));
  }, [user]);

  const handdlesearch = async () => {
    console.log("Search key", searchKey);
    // let SearchResponse = await SearchData(searchKey);
    // console.log("SearchResponse ", SearchResponse);
    let upercasekey = searchKey.charAt(0).toUpperCase() + searchKey.slice(1);
    setsearchKey("");
    navigate(`/key/${upercasekey}`, { state: { upercasekey } });
  };

  return (
    <>
      <SignUpModal
        show={modalShowSignUP}
        onHide={() => setModalShowSignUP(false)}
        user={user}
        setuser={setuser}
        logoutrun={logoutrun}
        setLogoutrun={setLogoutrun}
      />

      <Navbar key="md" bg="" expand="md" className="mb-3 navcontainer">
        <Container className="mt-2 mb-2">
          <NavLink className="nav-link" to="/">
            <Navbar.Brand href="#">
              <img
                src={Logo}
                alt="Logo"
                width="45"
                height="40"
                className="jumbo-logo"
              />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/publicar">
                  Publicar
                </NavLink>
                <NavDropdown
                  title="Autos"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item href="#action3">
                    <NavLink className="nav-link" to="/search/autos/automovil">
                      Automóvil
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    <NavLink className="nav-link" to="/search/autos/camioneta">
                      Camioneta
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    <NavLink className="nav-link" to="/search/autos/pickup">
                      Pick-Up
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action6">
                    <NavLink className="nav-link" to="/search/autos">
                      Buscar Autos
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Motos"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item>
                    <NavLink className="nav-link" to="/search/motos/scooter">
                      Scooter
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink className="nav-link" to="/search/motos/calle">
                      Calle
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink className="nav-link" to="/search/motos/touring">
                      Touring
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink className="nav-link" to="/search/motos/off-road">
                      Off-road
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink className="nav-link" to="/search/motos/cuatrimoto">
                      Cuatrimoto
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <NavLink className="nav-link" to="/search/motos">
                      Buscar Motos
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Camiones"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item>
                    <NavLink className="nav-link" to="/search/camiones/buses">
                      Buses
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      className="nav-link"
                      to="/search/camiones/camiones"
                    >
                      Camiones
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      className="nav-link"
                      to="/search/camiones/maquinaria"
                    >
                      Maquinaria pesada
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <NavLink className="nav-link" to="/search/camiones">
                      Buscar Camiones
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Botes"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item>
                    <NavLink className="nav-link" to="/search/botes/yates">
                      Yates
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink className="nav-link" to="/search/botes/lanchas">
                      Lanchas
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink className="nav-link" to="/search/botes/veleros">
                      Veleros
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      className="nav-link"
                      to="/search/botes/motoacuatica"
                    >
                      Motos acuaticas
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <NavLink className="nav-link" to="/search/botes">
                      Buscar Botes
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar..."
                  className="me-2"
                  aria-label="Search"
                  value={searchKey}
                  onChange={(e) => setsearchKey(e.target.value)}
                />
                <Button variant="outline-success" onClick={handdlesearch}>
                  Buscar
                </Button>
              </Form>

              {!user && (
                <Button
                  className="ms-2"
                  variant="light"
                  onClick={() => setModalShowSignUP(true)}
                >
                  {
                    <span className="text-secondary">
                      <FaUserAlt /> Ingresar
                    </span>
                  }
                </Button>
              )}

              {user && (
                <Button className="ms-2" variant="light">
                  <NavDropdown
                    title={
                      <span className="text-secondary">
                        {user.displayName ? user.displayName : user.email}
                      </span>
                    }
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                    <NavDropdown.Item href="#action3">
                      <NavLink className="nav-link" to="/account">
                        Mi Cuenta
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => setLogoutrun(true)}>
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </Button>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarmain;
