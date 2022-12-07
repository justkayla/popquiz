import { useAppContext } from "../utils/AppContext";

import line from "../assets/line.png";
import flower from "../assets/flower.jpg";
import logo from "../assets/logo.png";
import bee from "../assets/bee.gif";


const Home = () => {
  const { appState, setAppState } = useAppContext();
  console.log(appState);
  return (
    <div>
      <h1 className="title-main">Home</h1>

      {/* Cards on Top */}

      <section id="bee-top">
        <img className="bee" src={bee} alt="happy-bee" />
        <div class="speech-bubble">
          <h1 className="greeting">bzzz..Welcome!</h1>
          <p>To take more quizzes click the 'quizzes' Tab!</p>
        </div>
      </section>
      <section id="gallery">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-4">
              <div class="card-top">

                <img src={flower} class="img-top" alt="yellow flower" />

                <div class="card-body">
                  <h5 class="card-name">Best Quizzes!</h5>
                  <p class="card-text">
                    {" "}
                    🙶The quizzes are SUPER fun and I spend hours playing BuzzBuzz quizzes!🙷
                  </p>
                  <h5 class="ranking"> ─ Anonymous User</h5>
                  {/* <a href="/Profile" id="flower-btn" class="btn btn-outline-warning btn-sm">
                    View Profile */}
                  {/* </a> */}
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="card-top">
                <img src={flower} className="img-top" alt="placeholder" />
                <div class="card-body">
                  <h5 class="card-name">Best Quiz Website 2022</h5>
                  <p class="card-text">
                    🙶BuzzBuzz is reliable website that provides the highest
                    quality information for quizzes and expanded for a diverse
                    audience!🙷{" "}
                  </p>
                  <h5 class="ranking"> ─ WebsiteRankers</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="card-top">

                <img src={flower} class="img-top" alt="placeholder" />

                <div class="card-body">
                  <h5 class="card-name">So Addicting!</h5>
                  <p class="card-text">
                    🙶BuzzBuzz is has ALL the latest Pop culture buzz and content
                    in their engaging quizzes, I highly recommend.🙷
                  </p>
                  <h5 class="ranking"> ─ Anonymous User</h5>
                </div>
              </div>
            </div>
            <img className="line" src={line} alt="placeholder" />
          </div>
        </div>
      </section>
      {/* Footer (Not fully functional, mainly style) */}
      <div class="container-fluid">
        {" "}
        <output class="bg-white shadow-sm">
          <footer class="section-footer border-top">
            <div class="container-fluid">
              <section class="footer-top padding-y">
                <div class="row">
                  <aside class="col-md-4">
                    <article class="mr-3">
                      {" "}
                      <img className="logo" src={logo} alt="buzzbuzz logo" />
                      <p class="mt-3 description">
                        BuzzBuzz, is committed to providing trusted, quality,
                        brand-safe news and entertainment to our viewers; making
                        content on the Internet more inclusive, empathetic, and
                        creative; and inspiring our audience to live better
                        lives
                      </p>
                    </article>
                  </aside>
                  <aside class="col-sm-3 col-md-2">
                    <h6 class="title">About</h6>
                    <ul class="list-unstyled">
                      <li>
                        {" "}
                        <a href="#" data-abc="true">
                          About us
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#" data-abc="true">
                          Services
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#" data-abc="true">
                          Terms & Condition
                        </a>
                      </li>
                    </ul>
                  </aside>
                  <aside class="col-sm-3 col-md-2">
                    <h6 class="title">Services</h6>
                    <ul class="list-unstyled">
                      <li>
                        {" "}
                        <a href="#" data-abc="true">
                          Help center
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#" data-abc="true">
                          Terms and Policy
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#" data-abc="true">
                          Open dispute
                        </a>
                      </li>
                    </ul>
                  </aside>
                  <aside class="col-sm-3 col-md-2">
                    <h6 class="title">For users</h6>
                    <ul class="list-unstyled">
                      <li>
                        {" "}
                        <a href="/login" data-abc="true">
                          {" "}
                          User Login{" "}
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="/signup" data-abc="true">
                          {" "}
                          User Signup{" "}
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="/profile" data-abc="true">
                          {" "}
                          Profile{" "}
                        </a>
                      </li>
                    </ul>
                  </aside>
                  <aside class="col-sm-2 col-md-2">
                    <h6 class="title">Our app</h6>{" "}
                    <a href="#" class="d-block mb-2" data-abc="true">
                      <img
                        class="img-responsive"
                        src="https://i.imgur.com/nkZP7fe.png"
                        height="40"
                      />
                    </a>{" "}
                    <a href="#" class="d-block mb-2" data-abc="true">
                      <img
                        class="img-responsive"
                        src="https://i.imgur.com/47q2YGt.png"
                        height="40"
                        width="123"
                      />
                    </a>
                  </aside>
                </div>
              </section>
              <section class="footer-copyright border-top">
                <p class="float-left text-muted">
                  {" "}
                  &copy; 2022 BuzzBuzz All rights reserved{" "}
                </p>
                <p target="_blank" class="float-right text-muted">
                  {" "}
                  <a href="#" data-abc="true">
                    Privacy &amp; Cookies
                  </a>{" "}
                  &nbsp; &nbsp;{" "}
                  <a href="#" data-abc="true">
                    Accessibility
                  </a>{" "}
                </p>
              </section>
            </div>
          </footer>
        </output>{" "}
      </div>
    </div>
  );
};

export default Home;
