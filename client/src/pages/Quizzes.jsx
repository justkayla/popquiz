import { useState } from "react";
import { useAppContext } from "../utils/AppContext";
import { Container } from "react-bootstrap";
import Quizzlet from "../components/Quizzlet";
import Warning from "../components/Alert";

/**
 * If not logged in, redirect to login page
 */

const Quiz = () => {
  const { appState, setAppState } = useAppContext();

  if (!appState.user) {
    // If user is not logged in, display alert
    return <Warning />;
  } else {
    return (
      <>
        <h1 className="title-quiz">Quizzes</h1>
        <Container style={{ paddingTop: "1em" }}>
          <h1 className="header-quiz">
            Today's Featured Quiz: Actors and their Characters from Friends!
          </h1>
          <Quizzlet />
        </Container>
      </>
    );
  }
};

export default Quiz;
