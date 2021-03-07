import React from "react";

import "./styles/Home.css";

const email = "hello@404studio.xyz";

class Home extends React.Component {
  render() {
    return (
      <>
        <div>
          <center>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mystorage-af4f8.appspot.com/o/animatedLogo_black.gif?alt=media&token=f107b702-b1cc-4e63-a41b-6a08f125504f"
              alt="404 studio logo"
            ></img>
          </center>
        </div>
        <div>
          <p>
            Sitio en construcción. Escribenos
            <a href="mailto:hello@404studio.xyz"> {email} </a>
            para contactarnos contigo.
            <span aria-label="a rocket blasting off" role="img">
              🚀
            </span>
          </p>
        </div>
      </>
    );
  }
}

export default Home;
