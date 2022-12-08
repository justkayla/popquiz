import { Container, Nav, Navbar } from "react-bootstrap";
import { useAppContext } from "../utils/AppContext";
import { Link } from "react-router-dom";

/**
 * If user is logged in
 * Display Home, Quizzes, Dashboard, and Logout tabs
 * else (if user is not logged in)
 * Display only Login tab
 */

const Navigation = () => {
  const { appState, setAppState, logout } = useAppContext();

  return (
    <>
      <Navbar className="nav-header" variant="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="nav-title" as={Link} to="/home">
            PopQuiz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav style={{ marginLeft: "auto" }}>
              <Nav.Link className="nav-body" as={Link} to="/quizzes">
                Quizzes
              </Nav.Link>

              <Nav.Link className="nav-body" as={Link} to="/user/:id">
                Dashboard
              </Nav.Link>

              {(!appState || !appState.user) && (
                <Nav.Link className="nav-body" as={Link} to="/">
                  Login
                </Nav.Link>
              )}

              {appState && appState.user && (
                <Nav.Link
                  className="nav-body"
                  as={Link}
                  to="/"
                  onClick={logout}
                >
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>           
    </>
  );
};

export default Navigation;
