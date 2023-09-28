import { useEffect, useState } from "react";
import style from "./Nav.module.css";
import linkedin from "../../images/linkedinIcon.png";
import git from "../../images/githubIcon.png";

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
            <li>
                <a target='_blank' href='https://www.linkedin.com/in/bryann-mart%C3%ADn-chuco-p%C3%A9rez-8565b81a6' rel="noreferrer">
                     <img src={linkedin} alt="Linkedin" className={style.iconLinkedin}/>
                </a>
            </li>
                    
            <li>
                <a target='_blank' href='https://github.com/BMchucoperez' rel="noreferrer">
                    <img src={git} alt="GitHub" className={style.iconGitHub}/>
                </a>
            </li>
        </div>
    );
};

export default Navbar;