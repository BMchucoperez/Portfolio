import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

const Landing = () => {
    return(
        <div>
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
        </div>
    );
};

export default Landing;