import styles from "./About.module.css";
import foto from "../../images/bm.jpeg";

const About = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <div id="about-section" className={styles.container}>
            <div>
                <img className={styles.img} src={foto} alt="foto" />
            </div>
            <div className={styles.person}>
                <h1>Bryann Chuco Perez</h1>
                <h4>Full Stack Developer</h4>
                <br />
                <h3>I'm a Full Stack Developer with a bachelor's degree in Electronic Engineering that helped me gain extensive experience in the field of telecommunications and information technologies.</h3>
                <h3>I am a responsible, organized and passionate person about learning. I like to investigate, solve problems and learn from others. I am willing to listen to ideas and contribute all my knowledge to achieve the proposed objectives.</h3>
                <h3>I have experience in JavaScript, HTML, CSS and also in technologies such as Node.js, Express, Sequelize, PostgreSQL, React.js, Redux, Git.</h3>
                <br />
                <button className={styles.btn} onClick={scrollToContact}>Contact me</button>
                <br />
            </div>
        </div>
    );
};

export default About;