import styles from "./Project.module.css";
import Rick from "../../images/RickAndMorty.jpg";
import Food from "../../images/Food.jpg";
import ecopaws from "../../images/ecopaws.png";
import piano from "../../images/piano.png";
import snake from "../../images/snake.png";

const Project = () => {
    return(
        <div id="projects-section" className={styles.container}>
            <h1>My Projects</h1>
            <div className={styles.txt}>
                <h3>I like to learn new things and I'm always looking for new projects to work on.</h3>
                <h3>So here I show you some of my latest projects.</h3>
            </div>
            <br />
            <div className={styles.cards}>
                <div className={styles.card}>
                    <a href="https://snakeappgame.netlify.app/">
                        <img className={styles.img} src={snake} alt="snake" />
                    </a>
                    <h2>Snake Game</h2>
                </div>
                <div className={styles.card}>
                    <a href="https://playpianoapp.netlify.app/">
                        <img className={styles.img} src={piano} alt="piano" />
                    </a>
                    <h2>Piano App</h2>
                </div>
                <div className={styles.card}>
                    <a href="https://ecopaws.netlify.app/">
                        <img className={styles.img} src={ecopaws} alt="ecopaws" />
                    </a>
                    <h2>EcoPaws</h2>
                </div>
                <div className={styles.card}>
                    <a href="https://github.com/BMchucoperez/Proyecto_RickAndMorty">
                        <img className={styles.img} src={Rick} alt="Rick" />
                    </a>
                    <h2>Rick and Morty App</h2>
                </div>
                <div className={styles.card}>
                    <a href="https://github.com/BMchucoperez/PI_Food_Henry">
                        <img className={styles.img} src={Food} alt="Food" />
                    </a>
                    <h2>Healthy Cooking Guide</h2>
                </div>
            </div>
            <br />
        </div>
    );
};

export default Project;