import React from 'react';
import { motion } from "framer-motion";
import { styles } from '../styles';
import { fb, link, cofe, logo } from '../assets';
import { SectionWrapper } from "../hoc";
import StarsCanvas from './canvas/Stars';
import { slideIn } from "../utils/motion";

const Footer = () => {

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className={styles.paddingX}>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="w-full max-w-7xl mx-auto py-10 flex flex-col items-center">
        <div className="flex items-center gap-5">
          <a
            href="https://www.facebook.com/aOzSparKz"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my Facebook"
          >
            <img src={fb} alt="Facebook" className="w-8 h-8" />
          </a>

          <a
            href="https://www.paypal.com/paypalme/aozsparkz"
            target="_blank"
            rel="noopener noreferrer"
            title="Buy me a coffee"
          >
            <img src={cofe} alt="Buy me Coffee!" className="w-8 h-8" />
          </a>

          <a
            href="https://www.linkedin.com/in/joe-paul-sajot-0b435b125/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my LinkedIn"
          >
            <img src={link} alt="LinkedIn" className="w-8 h-8 " />
          </a>
        </div>

        {/* Include the StarsCanvas component */}
        <StarsCanvas />

        <div className="text-center text-secondary py-10">
          <motion.div variants={slideIn()} initial="hidden" animate="visible">
            Joe Paul Sajot | Portfolio &copy; {new Date().getFullYear()}
          </motion.div>
        </div>

           <motion.img
      src={logo}
      alt=""
      className="w-20 h-20 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.10 }}
      onClick={handleLogoClick} // Add onClick event to scroll to top
    />
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "footer");
