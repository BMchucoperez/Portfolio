import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import ButtonBack from "../ButtonBack/ButtonBack";

const Landing = () => {
    return(
        <div>
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
            <ButtonBack />
        </div>
    );
};

export default Landing;