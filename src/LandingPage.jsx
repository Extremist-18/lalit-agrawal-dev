import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function LandingPage(){
    return (
        <>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
        </>
    );
}   

export default LandingPage;