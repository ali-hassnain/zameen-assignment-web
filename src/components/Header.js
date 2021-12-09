import React from "react";
import { useGlobalContext } from "./Context";

function Header() {
  const { modal, setModal } = useGlobalContext();
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
        <button className="navbar_button" onClick={() => setModal(true)}>
          surprise
        </button>
      </nav>
    </>
  );
}

export default Header;
