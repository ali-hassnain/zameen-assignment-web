import React from "react";
import { useGlobalContext } from "./Context";

function Header() {
  const { setModal } = useGlobalContext();
  return (
    <>
      <div>
        <nav className="navbar">
          <a href="/" className="navbar_title">
            zameen.com interview project
          </a>
          <button className="navbar_button" onClick={() => setModal(true)}>
            surprise
          </button>
        </nav>
      </div>
    </>
  );
}

export default Header;
