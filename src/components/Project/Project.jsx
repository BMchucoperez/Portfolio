import styles from "./Project.module.css";
import Rick from "../../images/RickAndMorty.jpg";
import Food from "../../images/Food.jpg";

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
                    <a href="https://github.com/BMchucoperez/Proyecto_RickAndMorty">
                        <img className={styles.img} src={Rick} alt="Rick" />
                    </a>
                    <h2>Rick and Morty App</h2>
                    <h4>Single Page Application that uses a Rick and Morty API</h4>
                </div>
                <div className={styles.card}>
                    <a href="https://github.com/BMchucoperez/PI_Food_Henry">
                        <img className={styles.img} src={Food} alt="Food" />
                    </a>
                    <h2>Healthy Cooking Guide</h2>
                    <h4>Single Page Application for searching and creating healthy recipes</h4>
                </div>
            </div>
            <br />
        </div>
    );
};

export default Project;