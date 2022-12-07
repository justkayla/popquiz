import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useAppContext } from "../utils/AppContext";
import { useNavigate } from "react-router-dom";
import flowers from "../assets/flowers.gif";
import bee from "../assets/bee.gif";
import Stack from "react-bootstrap/Stack";
import AwesomeButton from "../components/AwesomeButton";
import "react-awesome-button/dist/styles.css";

const Login = (props) => {
  const { appState, setAppState } = useAppContext();
  const [loginCreds, setLoginCreds] = useState({ email: "", password: "" });

  const [formMessage, setFormMessage] = useState({ type: "", msg: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    setFormMessage({ type: "", msg: "" });
    const authCheck = await fetch("/api/user/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCreds),
    });
    const authResult = await authCheck.json();

    // If the login was good, save the returned token as a cookie
    if (authResult.result === "success") {
      Cookie.set("auth-token", authResult.token);
      // return console.log(authResult)
      setAppState({ ...appState, user: authResult.user._doc });
      setFormMessage({
        type: "success",
        msg: "Your login was successful. Proceed!",
      });
    } else {
      setFormMessage({
        type: "danger",
        msg: "We could not log you in with the credentials provided.",
      });
    }
    setLoginCreds({ email: "", password: "" });
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/signup";
    navigate(path);
  };

  useEffect(() => {
    if (appState.user) window.location.href = "/home";
  }, [appState.user]);

  return (
    <>
      <div className="login-bee">
        <img className="bee" src={bee} alt="happy-bee" />
        <div class="speech-bubble">
          <h1 className="greeting">bzzz..Welcome!</h1>
          <p>Pleazzz.. Login!</p>
        </div>
      </div>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Stack>
          <Form onSubmit={handleLogin} style={{ width: "50%" }}>
            <Form.Group className="mb-2" controlId="email">
              <Form.Label className="mb-0">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={loginCreds.email}
                onChange={(e) =>
                  setLoginCreds({ ...loginCreds, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="password">
              <Form.Label style={{margin: "0"}} className="mb-0">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={loginCreds.password}
                onChange={(e) =>
                  setLoginCreds({ ...loginCreds, password: e.target.value })
                }
              />
            </Form.Group>

            {/* <Button>Login</Button>
        <Button onClick={routeChange} >Sign Up</Button> */}
            <AwesomeButton label="Login" />
          </Form>

          {formMessage.msg.length > 0 && (
            <Alert variant={formMessage.type} style={{ marginTop: "2em" }}>
              {formMessage.msg}
            </Alert>
          )}
          <Button
            style={{
              border: "black 2px solid",
              width: "100px",
              marginTop: "10px",
              boxShadow: "#ffc107 4px 4px",
            }}
            variant="warning"
            onClick={routeChange}
          >
            Sign Up
          </Button>

          <div>
            <img className="flowers" src={flowers} alt="flowers" />
          </div>
        </Stack>
      </Container>
    </>
  );
};

export default Login;
