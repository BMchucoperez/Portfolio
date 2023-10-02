import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import styles from "./ButtonBack.module.css";
import flecha from "../../images/flecha.png";

const ButtonBack = () => {
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        return window.scrollY > 600 ? setShow(true) : setShow(false);
      });
    });
  
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
  
    return (
      show && (
        <button
          onClick={() => scrollToTop()}
          className={styles.buttonBack}
        >
          <img src={flecha} alt="flecha" className={styles.icon} />
        </button>
      )
    );
  };
  
  export default ButtonBack;