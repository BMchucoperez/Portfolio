import { useEffect, useState } from "react";
import style from "./Nav.module.css";

const Navbar = () =>{

const [visible, setVisible] = useState(true);
const [prevScrollPos, setPrevScrollPos] = useState(0);

useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollPos, visible]);

const handleScroll = () => {

    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);

    setPrevScrollPos(currentScrollPos);
};

const navbarClass = visible ? style.navBar : `${style.navBar} ${style.hiddenNavBar}`;

const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};

const scrollToHome = () => {
    const contactSection = document.getElementById('home-section');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};

const scrollToAbout = () => {
    const contactSection = document.getElementById('about-section');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};

const scrollToProjects = () => {
    const contactSection = document.getElementById('projects-section');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};

    return(
        <div className={navbarClass}>
            <button className={style.btn} onClick={scrollToHome}>Home</button>
            <button className={style.btn} onClick={scrollToAbout}>About</button>
            <button className={style.btn} onClick={scrollToProjects}>Projects</button>
            <button className={style.btn} onClick={scrollToContact}>Contact</button>
        </div>
    );
};

export default Navbar;