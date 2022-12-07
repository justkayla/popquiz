import { Container, Nav, Navbar } from "react-bootstrap";
import { useAppContext } from "../utils/AppContext";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

/**
 * If user is logged in
 * Display Home, Quizzes, Profile, and Logout tabs
 * else (if user is not logged in)
 * Display only Login tab
 */

const Navigation = () => {
  const { appState, setAppState, logout } = useAppContext();

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img className="logo" src={logo} alt="buzzbuzz logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/quizzes">
              Quizzes
            </Nav.Link>

            <Nav.Link as={Link} to="/user/:id">
              Profile
            </Nav.Link>

            {(!appState || !appState.user) && (
              <Nav.Link as={Link} to="/">
                Login
              </Nav.Link>
            )}

            {appState && appState.user && (
              <Nav.Link as={Link} to="/" onClick={logout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
