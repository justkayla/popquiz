import { Alert, Button, Container, Form } from "react-bootstrap";
import { useAppContext } from "../utils/AppContext";
import { useState } from "react";
import AwesomeButton from "../components/AwesomeButton";
import Cookie from "js-cookie";


const Signup = () => {
  const { appState, setAppState } = useAppContext();

  const [signupCreds, setSignupCreds] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [formMessage, setFormMessage] = useState({ type: "", msg: "" });

  const handleSignup = async (e) => {
    e.preventDefault();
    setFormMessage({ type: "", msg: "" });
    const createUser = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupCreds),
    });
    const newUser = await createUser.json();
    // This is working, but maybe not committing user to db?
    console.log(newUser);

    // create a token for this new user
    if (newUser.result === "success") {
      Cookie.set("auth-token", newUser.payload.token);
      window.location.href = "/home";
      setFormMessage({
        type: "success",
        msg: "Successful sign up.",
      });
    } else {
      setFormMessage({
        type: "danger",
        msg: "We could not sign you up with the credentials provided.",
      });
    }
    setSignupCreds({ username: "", email: "", password: "" });
  };

  return (
    <Container
      style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}>
      <Form onSubmit={handleSignup} style={{ width: "50%" }}>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label className="mb-0">Username</Form.Label>
          <Form.Control
            type="username"
            name="username"
            placeholder="Enter username"
            value={signupCreds.username}
            onChange={(e) =>
              setSignupCreds({ ...signupCreds, username: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="email">
          <Form.Label className="mb-0">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={signupCreds.email}
            onChange={(e) =>
              setSignupCreds({ ...signupCreds, email: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="password">
          <Form.Label className="mb-0">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={signupCreds.password}
            onChange={(e) =>
              setSignupCreds({ ...signupCreds, password: e.target.value })
            }
          />
        </Form.Group>

        <AwesomeButton label="Sign Up!" />
      </Form>
      {formMessage.msg.length > 0 && (
        <Alert variant={formMessage.type} style={{ marginTop: "2em" }}>
          {formMessage.msg}
        </Alert>
      )}
    </Container>
  );
};

export default Signup;
