import React, { useState, useEffect } from "react";
import "../Assets/Css/Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  // const changeBackground = () => {
  //   if (window.scrollY >= 20) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  //   console.log(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  // window.addEventListener("scroll", changeBackground);

  return (
    <div className={`nav ${navbar && "scroll"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="nav_avatar"
      />
    </div>
  );
};

export default Navbar;
