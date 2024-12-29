import React, { useState, useEffect } from "react";
import "./game.css"; // Assuming the CSS file is named `Game.css`
import Image from "./image.png";
import Location from "./location.png";
import Phone from "./phone.png";

const Game = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Handle the menu button toggle
  const handleMenuClick = () => {
    setIsNavbarActive((prevState) => !prevState);
  };

  // Handle the scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }

      if (isNavbarActive) {
        setIsNavbarActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavbarActive]);

  // Handle FAQ box toggle
  const handleFAQClick = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div>
      {/* Header Section */}
      <header className={`header ${isHeaderActive ? "active" : ""}`}>
        <section className="flex">
          <a href="" className="logo">
            <i className="fa fa-trophy"></i> GamePro
          </a>
          <nav className={`navbar ${isNavbarActive ? "active" : ""}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">Faq</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#" className="btn">
            Sign up
          </a>
        </section>
      </header>

      <div
        id="menu-btn"
        className={`fa-solid fa-bars ${isNavbarActive ? "fa-times" : ""}`}
        onClick={handleMenuClick}
      ></div>

      {/* home section starts */}
      <div className="home" id="home">
        <section className="flex">
          <div className="content">
            <h3>
              <span>unlimited </span>games heaven
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              culpa unde eveniet? Porro, alias nulla.
            </p>
            <a href="#" className="btn">
              Play Now
            </a>
          </div>
          <div className="image">
            <img
              src="https://img.freepik.com/premium-photo/illustration-boy-play-virtual-reality-game-ai-generated_206846-4241.jpg"
              alt="Game"
            />
          </div>
        </section>
      </div>
      {/* home section ends */}

      {/* features section starts */}
      <section className="features">
        <h1 className="heading">
          Our <span>Features</span>
        </h1>
        <div className="box-container">
          <div
            className="box"
            style={{
              background:
                "url(https://i.pinimg.com/originals/25/58/79/255879d58b404a27c5d19a46e4601954.jpg) no-repeat",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Yl5-Paqt0Uybb-h8-Bo7ef_zT0_FhM-gMQ&s"
              alt="New Events"
            />
            <h3>New Events Every Day</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Quis
              Minima Esse Molestiae Cum Quasi, Voluptas Dolore Porro Ratione
              Ipsam Quam Sint, Deleniti Doloribus Est Dolorum Neque, Ad Commodi
              Error Vitae?
            </p>
          </div>

          <div
            className="box"
            style={{
              background:
                "url(https://i.pinimg.com/originals/25/58/79/255879d58b404a27c5d19a46e4601954.jpg) no-repeat",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouCHKALwZ1ZP8Y8E7xbQmmcIAY09Uvqq3ewaWT2MrncMoJGouqzjtEdwZUKMe8qygWIQ&usqp=CAU"
              alt="Compatible Devices"
            />
            <h3>Compatible with Any Devices</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              minima esse molestiae cum quasi, voluptas dolore porro ratione
              ipsam quam sint, deleniti doloribus est dolorum neque, ad commodi
              error vitae?
            </p>
          </div>

          <div
            className="box"
            style={{
              background:
                "url(https://i.pinimg.com/originals/25/58/79/255879d58b404a27c5d19a46e4601954.jpg) no-repeat",
            }}
          >
            <img
              src="https://i.pinimg.com/736x/e1/77/0b/e1770bf76878cecbe80554842d14b837.jpg"
              alt="Online & Offline Modes"
            />
            <h3>Online and Offline Modes</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              minima esse molestiae cum quasi, voluptas dolore porro ratione
              ipsam quam sint, deleniti doloribus est dolorum neque, ad commodi
              error vitae?
            </p>
          </div>
        </div>
      </section>
      {/* features section ends */}

      {/* about section starts */}
      <div className="about" id="about">
        <section className="flex">
          <div className="image">
            <img
              src="https://img.freepik.com/premium-vector/man-woman-astronauts-moon-with-flag-cosmonaut-cute-cartoon-characters-moon-surface-space_177886-48.jpg"
              alt="About Us 1"
            />
          </div>

          <div className="content">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit obcaecati quae optio laboriosam tenetur nihil qui
              est inventore nulla necessitatibus.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="image">
            <img
              src="https://img.freepik.com/premium-vector/cute-cartoon-astronaut-boy-girl-floating-space_125371-295.jpg"
              alt="About Us 2"
            />
          </div>
        </section>
      </div>
      {/* about section ends */}

      {/* top-games section starts */}
      <section className="top-games">
        <h1 className="heading">
          <span>Top</span> Games
        </h1>
        <div className="box-container">
          <a href="#" className="box">
            <img
              src="https://shop.psd-tutorials.de/produkte/dvds/top-trainings/starterkit-game-design-720.jpg"
              alt="Game 1"
            />
          </a>
          <a href="#" className="box">
            <img
              src="https://www.quizexpo.com/wp-content/uploads/2022/03/cover-6-850x491.jpg"
              alt="Game 2"
            />
          </a>
          <a href="#" className="box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQezF7zTb3MbrgLlKEwDcOlv4e9UmeDUIQcjmlGgZO03mx2H800sSuW8Qcq5IZPaNQsE&usqp=CAU"
              alt="Game 3"
            />
          </a>
          <a href="#" className="box">
            <img
              src="https://www.shutterstock.com/shutterstock/videos/1102259129/thumb/10.jpg?ip=x480"
              alt="Game 4"
            />
          </a>
          <a href="#" className="box">
            <img
              src="https://blog.bccresearch.com/hubfs/Blog_Images/Video-Gaming.jpg"
              alt="Game 5"
            />
          </a>
          <a href="#" className="box">
            <img
              src="https://t3.ftcdn.net/jpg/05/80/24/50/360_F_580245012_BaPl9uFP3J1PHvtKMuJ3OSXF2fkk0EQ6.jpg"
              alt="Game 6"
            />
          </a>
          <a href="#" className="box">
            <img
              src="https://img.freepik.com/free-photo/cartoon-woman-wearing-vr-glasses_23-2151136878.jpg"
              alt="Game 7"
            />
          </a>
          <a href="#" className="box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWHCZNcARBCj4_n-_s90rqvrJLBxTsDUkuA4yX9H0S1y9tKQ9sbQ5Rh6A-g8FFxmP8KKA&usqp=CAU"
              alt="Game 8"
            />
          </a>
        </div>
      </section>
      {/* top-games section ends */}
      {/* pricing section starts */}

      <section className="pricing" id="pricing">
        <h1 className="heading">
          our <span>prices</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <h3>silver</h3>
            <div className="amount">
              <span>$ </span>90.99
            </div>
            <div className="date"> for 3 months</div>
            <div className="list">
              <p>
                <i className="fa fa-check"></i>15 days free trial
              </p>
              <p>
                <i className="fa fa-check"></i>cancel anytime
              </p>
              <p>
                <i className="fa fa-check"></i>24/7 service
              </p>
              <p>
                <i className="fa fa-xmark"></i>daily coins/diamonds
              </p>
              <p>
                <i className="fa fa-xmark"></i>premium games access
              </p>
            </div>
            <a href="#" className="btn">
              check out
            </a>
          </div>

          <div className="box">
            <h3>gold</h3>
            <div className="amount">
              <span>$ </span>59.99
            </div>
            <div className="date"> for 6 months</div>
            <div className="list">
              <p>
                <i className="fa fa-check"></i>15 days free trial
              </p>
              <p>
                <i className="fa fa-check"></i>cancel anytime
              </p>
              <p>
                <i className="fa fa-check"></i>24/7 service
              </p>
              <p>
                <i className="fa fa-check"></i>daily coins/diamonds
              </p>
              <p>
                <i className="fa fa-xmark"></i>premium games access
              </p>
            </div>
            <a href="#" className="btn">
              check out
            </a>
          </div>

          <div className="box">
            <h3>diamonds</h3>
            <div className="amount">
              <span>$ </span>90.99
            </div>
            <div className="date"> for 12 months</div>
            <div className="list">
              <p>
                <i className="fa fa-check"></i>15 days free trial
              </p>
              <p>
                <i className="fa fa-check"></i>cancel anytime
              </p>
              <p>
                <i className="fa fa-check"></i>24/7 service
              </p>
              <p>
                <i className="fa fa-check"></i>daily coins/diamonds
              </p>
              <p>
                <i className="fa fa-check"></i>premium games access
              </p>
            </div>
            <a href="#" className="btn">
              check out
            </a>
          </div>
        </div>
      </section>
      {/* Pricing section ends  */}

      {/* FAQ Section */}
      <div className="faq" id="faq">
        <section className="box-container">
          <h1 className="heading">
            <span>f</span>requently <span>a</span>sked <span>q</span>uestions
          </h1>
          {[
            "how to play?",
            "how to invite friends?",
            "how to complete daily Quests?",
            "how to enter a special events game?",
            "does it work with low internet connection?",
          ].map((question, index) => (
            <div
              key={index}
              className="box"
              onClick={() => handleFAQClick(index)}
            >
              <div className="title">
                <h3>{question}</h3>
                <i
                  className={`fa ${
                    activeFAQ === index ? "fa-minus" : "fa-plus"
                  }`}
                ></i>
              </div>
              <div className={`content ${activeFAQ === index ? "active" : ""}`}>
                {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque totam tempora veritatis quos`}
              </div>
            </div>
          ))}
        </section>
        {/* FAQ Section ends */}

        {/* contact section starts  */}

        <section className="contact" id="contact">
          <h1 className="heading">
            <span>contact </span>us
          </h1>

          <div className="box-container">
            <div
              className="box"
              style={{
                background:
                  "url('https://i.pinimg.com/originals/25/58/79/255879d58b404a27c5d19a46e4601954.jpg') no-repeat",
              }}
            >
              <img src={Image} alt="Mail" />
              <h3>email</h3>
              <a href="mailto:example@gmail.com">mailto:example@gmail.com</a>
              <a href="mailto:info@gmail.com">mailto:info@gmail.com</a>
            </div>

            <div
              className="box"
              style={{
                background:
                  "url('https://i.pinimg.com/originals/25/58/79/255879d58b404a27c5d19a46e4601954.jpg') no-repeat",
              }}
            >
              <img src={Phone} alt="Phone" />
              <h3>phone</h3>
              <a href="tel:1112223333">111-222-3333</a>
              <a href="tel:1112223333">111-222-3333</a>
            </div>

            <div
              className="box"
              style={{
                background:
                  "url('https://i.pinimg.com/originals/25/58/79/255879d58b404a27c5d19a46e4601954.jpg') no-repeat",
              }}
            >
              <img src={Location} alt="Location" />
              <h3>address</h3>
              <a href="#">dadegaon paithan tq.paithan india - 414 202</a>
            </div>
          </div>

          <br />

          <form className="from" action="">
            <h1 className="heading">
              <span>get</span> in touch
            </h1>
            <div className="flex">
              <input type="text" placeholder="your name" className="input" />
              <input type="email" placeholder="your email" className="input" />
              <input
                type="number"
                placeholder="your number"
                className="input"
              />
              <input type="text" placeholder="your country" className="input" />
            </div>
            <textarea className="input" placeholder="your message"></textarea>
            <input type="submit" value="send message" className="btn" />
          </form>
        </section>
        {/* contact section end */}
        {/* footer section starts */}
        <footer className="footer">
          <section className="box-container">
            <div className="box">
              <h3>Quick Links</h3>
              <a href="#home" className="link">
                Home
              </a>
              <a href="#about" className="link">
                About
              </a>
              <a href="#pricing" className="link">
                Pricing
              </a>
              <a href="#faq" className="link">
                Faq
              </a>
              <a href="#contact" className="link">
                Contact
              </a>
            </div>

            <div className="box">
              <h3>Terms of Use</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, aspernatur.
              </p>
              <div className="share-links">
                <a href="#" className="fab fa-youtube"></a>
                <a href="#" className="fab fa-linkedin"></a>
                <a href="#" className="fab fa-github"></a>
                <a href="#" className="fab fa-discord"></a>
              </div>
            </div>

            <div className="box">
              <h3>Extra Links</h3>
              <a href="#" className="link">
                User Login
              </a>
              <a href="#" className="link">
                New Updates
              </a>
              <a href="#" className="link">
                Buy Battle Pass
              </a>
              <a href="#" className="link">
                Privacy Policy
              </a>
              <a href="#" className="link">
                Other Services
              </a>
            </div>
          </section>

          <section className="credit">
            <p>
              Created by <span>miss.aarti designer</span>
            </p>
            <p>© Copyright @ 2024 | All Rights Reserved</p>
          </section>
        </footer>
        {/* footer section ends */}
      </div>
    </div>
  );
};

export default Game;
