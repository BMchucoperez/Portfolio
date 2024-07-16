import styles from "./Home.module.css";
import image from "../../images/imagen1.png";
import linkedin from "../../images/linkedinIcon.png";
import git from "../../images/githubIcon.png";

const Home = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <div id="home-section" className={styles.container}>
            <div className={styles.person}>
                <h3 className={styles.sld}>Hi, I'm Bryann!🖐</h3>
                <h1>Full Stack Developer</h1>
                <h3>It's not just a job, it's a passion</h3>
                <br />
                <div className={styles.icons}>
                    <li>
                        <a target='_blank' href='https://www.linkedin.com/in/bryann-mart%C3%ADn-chuco-p%C3%A9rez-8565b81a6' rel="noreferrer">
                            <img src={linkedin} alt="Linkedin" className={styles.iconLinkedin}/>
                        </a>
                    </li>
                    
                    <li>
                        <a target='_blank' href='https://github.com/BMchucoperez' rel="noreferrer">
                            <img src={git} alt="GitHub" className={styles.iconGitHub}/>
                        </a>
                    </li>
                </div>
                <br />
                <button className={styles.btn} onClick={scrollToContact}>Work with me</button>
            </div>
            <div className={styles.box}>
                <img className={styles.img} src={image} alt="imagen" />
            </div>
            
        </div>
    );
};

export default Home;