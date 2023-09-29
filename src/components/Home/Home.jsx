import styles from "./Home.module.css";
import image from "../../images/imagen1.png";

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
                <button className={styles.btn} onClick={scrollToContact}>Work with me</button>
            </div>
            <div className={styles.box}>
                <img className={styles.img} src={image} alt="imagen" />
            </div>
        </div>
    );
};

export default Home;