import React, { use } from "react";
import "./styles/HiddenSearchBar.css";
import { useState } from "react";
// importing the fa icon from react icon library so first install react-icon library in terminal

import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgcolor, setBgcolor] = useState("white");
  const handleClick = (e) => {
    setBgcolor("#1a1a1a");

    if (e.target.className === "container") {
      setShowInput(false);
      setBgcolor("#fff");
    }
  };

  return (
    <section
      className="container"
      style={{ backgroundColor: bgcolor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search..."></input>
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default HiddenSearchBar;
