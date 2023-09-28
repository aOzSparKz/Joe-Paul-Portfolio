import React from 'react';
import { styles } from '../styles';
import { fb, link, cofe } from '../assets';

const Footer = () => {
  return (
    <footer className={styles.paddingX}>
      <div className="w-full max-w-7xl mx-auto py-10 flex flex-col items-center">
        <div className="flex items-center gap-5">

        <a
            href="https://www.facebook.com/aOzSparKz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fb} alt="Facebook" className="w-10 h-10" />
          </a>


        
          <a
            href="https://www.paypal.com/paypalme/aozsparkz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={cofe} alt="Facebook" className="w-10 h-10" />
          </a>
         


          <a
            href="https://www.linkedin.com/in/joe-paul-sajot-0b435b125/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link} alt="LinkedIn" className="w-10 h-10" />
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
