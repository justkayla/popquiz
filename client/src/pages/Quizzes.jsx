import { useState } from "react";
import { useAppContext } from "../utils/AppContext";
import { Container } from "react-bootstrap";
import Quizzlet from "../components/Quizzlet";
import Warning from "../components/Alert";
import marvel from "../assets/marvel.jpg";
import harry from "../assets/harrypotter.jpg";
import pop from "../assets/popculture.jpg";
import hellokitty from "../assets/hellokitty.jpg";
import disney from "../assets/disney.jpg";
import pika from "../assets/pika.jpg";
import line from "../assets/line.png";


/**
 * If not logged in, redirect to login page
 */

const Quiz = () => {
  const { appState, setAppState } = useAppContext();

  if (!appState.user) {
    // alert? you need to be logged in?
    return <Warning />;
  } else {
    return (
        <div>
      <h1 className="title-quiz">Quizzes</h1>
      <button className="category" variant="primary" type="submit">
        Latest
      </button>
      <button className="category" variant="primary" type="submit">
        Movies
      </button>
      <button className="category" variant="primary" type="submit">
        Trivia
      </button>
      <button className="category" variant="primary" type="submit">
        Books
      </button>
      <button className="category" variant="primary" type="submit">
        Music
      </button>
      <button className="category" variant="primary" type="submit">
        Games
      </button>
      <button className="category" variant="primary" type="submit">
        Personality
      </button>
      <button className="category" variant="primary" type="submit">
        Zodiac
      </button>
      <button className="category" variant="primary" type="submit">
        Animals
      </button>
      <Container style={{ paddingTop: "1em" }}>
        <h1 className="header-quiz">Today's Featured Quiz: Actors and their Characters from Friends!</h1>
        <Quizzlet />
        <img className="line" src={line} alt="placeholder" />
        <div class="py-5">
        <div class="container">
          <h2 className="trending"> Trending Quizzes</h2>
          <div class="row hidden-md-up">
            <div class="col-md-4">
              <div class="card">
                <div class="card-block">
                  <img className="mquiz-img" src={marvel} alt="placeholder" />
                  <h4 class="card-title">
                    Since Marvel Gifted Us The Best Special, Let's See Which
                    Character From The "TGOTG Holiday Special" You Are
                  </h4>
                  <h6 class="card-subtitle text-muted">Marvel</h6>
                  <p class="card-text p-y-1">By Noah Mayfield</p>
                  <a href="#" class="card-link">
                    Take Quiz
                  </a>
                  <a href="#" class="card-link">
                    View All Quizzes
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-block">
                  <img className="mquiz-img" src={pop} alt="" />
                  <h4 class="card-title">
                    Let's See If You Have Enough Pop Culture Knowledge To
                    Identify Which Of These Famous People Were Born On These
                    Holidays?
                  </h4>
                  <h6 class="card-subtitle text-muted">Pop Culture</h6>
                  <p class="card-text p-y-1">By Sage V</p>
                  <a href="#" class="card-link">
                    Take Quiz
                  </a>
                  <a href="#" class="card-link">
                    View All Quizzes
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-block">
                  <img className="mquiz-img" src={harry} alt="placeholder" />
                  <h4 class="card-title">
                    ㅤYou'll Only Pass This "Harry Potter" Quiz If You Watched
                    All The Movies AND Read All The Books!ㅤㅤㅤㅤㅤ
                  </h4>
                  <h6 class="card-subtitle text-muted">Harry Potter</h6>
                  <p class="card-text p-y-1">By Emilymartin3</p>
                  <a href="#" class="card-link">
                    Take Quiz
                  </a>
                  <a href="#" class="card-link">
                    View All Quizzes
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <div class="card-block">
                  <img className="mquiz-img" src={disney} alt="placeholder" />
                  <h4 class="card-title">
                    If You Were An Obscure Disney Character, Who Would You
                    Be?ㅤㅤㅤㅤㅤ
                  </h4>
                  <h6 class="card-subtitle text-muted">Disney</h6>
                  <p class="card-text p-y-1">audreylaw11</p>
                  <a href="#" class="card-link">
                    Take Quiz
                  </a>
                  <a href="/Quizzlet" class="card-link">
                    View All Quizzes
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-block">
                  <img
                    className="mquiz-img"
                    src={hellokitty}
                    alt="placeholder"
                  />
                  <h4 class="card-title">
                    Everyone Has A Sanrio Character Who Matches Their
                    Personality. What's Yours?
                  </h4>
                  <h6 class="card-subtitle text-muted">Hello Kitty</h6>
                  <p class="card-text p-y-1">Kelly Martinez</p>
                  <a href="#" class="card-link">
                    Take Quiz
                  </a>
                  <a href="#" class="card-link">
                    View All Quizzes
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-block">
                  <img className="mquiz-img" src={pika} alt="placeholder" />
                  <h4 class="card-title">
                    How Many Of These 36 Classic Pokémon Can You Actually
                    Identify?ㅤㅤㅤㅤㅤ
                  </h4>
                  <h6 class="card-subtitle text-muted">Pokemon</h6>
                  <p class="card-text p-y-1">Kelly Martinez</p>
                  <a href="#" class="card-link">
                    Take Quiz
                  </a>
                  <a href="#" class="card-link">
                    View All Quizzes
                  </a>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>
      </Container>
      </div>
      
    );
  }
};

export default Quiz;
