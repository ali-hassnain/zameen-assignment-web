import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      <head>
        <title>Zameen Interview Assignment Project</title>
        <meta name="zameen interview assignment project" />
      </head>

      <nav className="navbar">
        <a href="/" className="navbar_title">
          zameen.com interview project
        </a>
        <button className="navbar_button">surprise</button>
      </nav>
    </>
  );
}

export default Header;
