import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Review from "./Review";

/**
 * Dynamically generate review <div> for each review in the reviews array?
 * Capture text and username on submit
 * Display username associated with review
 */

function ReviewWrapper() {
  //  const [review, setReview] = useState({ review: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
    //  setReview({ review: document.getElementById("review-field").value });
    const review = { review: document.getElementById("review-field").value };
    fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        width: "auto",
        border: "#9d7044 2px solid",
        boxShadow: "#e7ceba 5px 5px ",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#fff",
        color: "#555",
      }}
    >
      <Stack gap={3}>
        <Form
          style={{
            width: "auto",
            marginBottom: "50px",
            padding: "10px",
            borderBottom: "#D3D3D3 2px solid",
          }}
        >
          <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="mb-0" style={{ color: "#555" }}>
              Leave a review on today's featured quiz!
            </Form.Label>
            <Form.Control
              id="review-field"
              style={{ width: "100%" }}
              as="textarea"
              rows={5}
            />
          </Form.Group>

          <Button
            style={{
              marginTop: "15px",
              backgroundColor: "#ffc107",
              border: "#ffc107",
              borderRadius: "5px",
              padding: "10px",
              cursor: "pointer",
            }}
            variant="warning"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
        <div
          className="review"
          style={{
            width: "auto",
            margin: "10px",
            border: "rgb(243, 236, 236) 2px solid",
            backgroundColor: "rgb(243, 236, 236)",
            borderRadius: "5px",
          }}
        >
          <Review />
        </div>
      </Stack>
    </Container>
  );
}

export default ReviewWrapper;
