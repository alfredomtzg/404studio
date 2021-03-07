import React from "react";
import "./styles/Home.css";

const email = "hello@404studio.xyz";

export default function Home() {

  return (
    <>
      <header>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mystorage-af4f8.appspot.com/o/animatedLogo_black.gif?alt=media&token=f107b702-b1cc-4e63-a41b-6a08f125504f"
          alt="404 studio logo"
        ></img>
      </header>
      <div>
        <h1>
          Sitio en construcción.
          <br />
        Escribenos a:
            <a href="mailto:hello@404studio.xyz"> {email} </a>
          <br />
            para contactarnos contigo.
            <br />
          <span aria-label="a rocket blasting off" role="img">
            🚀
            </span>
        </h1>
      </div>
    </>
  );

}
