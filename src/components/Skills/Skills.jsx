import styles from "./Skills.module.css";

const Skills = () => {
    return(
        <div className={styles.container}>
            <h1>Skills</h1>
            <div className={styles.icons}>
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
		            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60"/> 
	            </a> 
	            <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> 
		            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="60" height="60"/> 
	            </a>
                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
		            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60"/>
                </a> 
	            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
		            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60"/> 
	            </a> 
	            <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
		            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="90" height="80"/>
                </a> 
	            <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> 
		            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="60" height="60"/> 
	            </a> 
	            <a href="https://postman.com" target="_blank" rel="noreferrer">
                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="60" height="60"/> 
	            </a> 
	            <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="60" height="60"/>
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src="https://img.shields.io/badge/react-%2361DAFB.svg?style=plastic&logo=React&logoColor=black" alt="React"  width="95" height="40"/>
                </a>
            </div>
        </div>
    );
};

export default Skills;