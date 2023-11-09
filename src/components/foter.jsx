import React, { useEffect } from 'react';
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

  useEffect(() => {
    // Load Google AdSense script
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <footer className={styles.paddingX}>
      <div className="w-full max-w-7xl mx-auto py-10 flex flex-col items-center">
        <div className="flex items-center gap-5">
          <div className="banner-left">
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="YOUR_AD_CLIENT_ID"
              data-ad-slot="YOUR_AD_SLOT_ID_LEFT"
              data-ad-format="auto"
            ></ins>
          </div>

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
            <img src={link} alt="LinkedIn" className="w-8 h-8" />
          </a>

          <div className="banner-right">
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="YOUR_AD_CLIENT_ID"
              data-ad-slot="YOUR_AD_SLOT_ID_RIGHT"
              data-ad-format="auto"
            ></ins>
          </div>
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
          onClick={handleLogoClick}
        />
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "footer");
