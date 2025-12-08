import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const setLocation = () => {
        window.location.href = "/counter";
    };
    const setLocation2 = () => {
        window.location.href = "/body";
    };
  return (
    <nav className="navbar">
        <button onClick={setLocation}>Counter</button>
        <button onClick={setLocation2}>Body</button>
    </nav>
  );
}
