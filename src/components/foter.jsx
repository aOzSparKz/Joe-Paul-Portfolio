import React, { useState } from "react";
import { styles } from "../styles";
import { logo } from "../assets";


const Footer = () => {
  const [active, setActive] = useState("");

  return (
    <footer className={styles.paddingX}>
      <div className="w-full max-w-7xl mx-auto py-10 flex flex-col items-center">
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/joe-paul-sajot-0b435b125/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="LinkedIn" className="w-12 h-12" />
          </a>
        </div>

        <div className="text-center text-secondary py-2">
          Joe Paul Sajot | Portfolio &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
