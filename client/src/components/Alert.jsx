import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Warning() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Alert variant="warning" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oops!</Alert.Heading>
          <p>
            You need to be logged in to view this content. Please {" "} 
            <Alert.Link as={Link} to="/">
              login or sign up
            </Alert.Link>
            . We're happy you're here!
          </p>
        </Alert>
      </Container>
    );
  }
  return <Button variant="warning" onClick={() => setShow(true)}>Show Alert</Button>;
}

export default Warning;
