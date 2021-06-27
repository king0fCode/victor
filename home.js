import React, { useState } from "react";
import "./style.css";
import "./navbar.css";
import "./services.css";
import "./footer.css";

const Home = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <section className="nav">
        <div className="navigation f1">
          <nav>
            <div className="logo">
              <h2>Switchbit</h2>
            </div>

            <ul className={toggled ? "slide" : ""}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#work">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#contact">Signin</a>
              </li>
            </ul>
            <div className="menu-bars" onClick={() => setToggled(!toggled)}>
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </section>

      <section id="home">
        <div className="home">
          <h1>
            Creative and media <br /> digital agency
          </h1>
          <p>
            TheGem is a creative marketing agency that specializes in strategy,
            <br />
            creativity, design and innovative technology.
          </p>
          <a href="#services">Services</a>
        </div>
      </section>

      <section id="services">
        <div className="services">
          <h1>Our Services</h1>
          <div className="service-cards">
            <div className="service">
              <i className="fa fa-cog" aria-hidden="true"></i>
              <h2>
                Web <br /> Development
              </h2>
              <br />
              <p>
                Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed
                doiusmod tempor incidi labore.
              </p>
            </div>

            <div className="service  mt">
              <i className="fa fa-cog" aria-hidden="true"></i>
              <h2>
                Web <br /> Development
              </h2>
              <br />
              <p>
                Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed
                doiusmod tempor incidi labore.
              </p>
            </div>

            <div className="service">
              <i className="fa fa-cog" aria-hidden="true"></i>
              <h2>
                Web <br /> Development
              </h2>
              <br />
              <p>
                Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed
                doiusmod tempor incidi labore.
              </p>
            </div>

            <div className="service mt">
              <i className="fa fa-cog" aria-hidden="true"></i>
              <h2>
                Web <br /> Development
              </h2>
              <br />
              <p>
                Lorem ipsum dolor sit ametcon sectetur adipisicing elit sed
                doiusmod tempor incidi labore.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="logo-footer">
          <h1>Switchbit</h1>
          <p>Contact us</p>
        </div>
        <div className="content-footer">
          <h2>Get in Touch</h2>
          <h3>+12 345 678 910</h3>
          <h3>emailexample@email.com</h3>
          <h3>address</h3>
        </div>
      </footer>
    </>
  );
};

export default Home;
