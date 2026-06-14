import { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectData"
import "./Projects.scss"
import projects from "./ProjectData";
import HoverText from "../HoverText/HoverText";
import left from "../../assets/left.png";
import right from "../../assets/right.png"

function Projects(){
    const [curr,setCurr] = useState(0);
    const [dir,setDir] = useState("right");

    const nextProject=()=>{
        setDir("right");
        setCurr((prev)=>((prev+1)%projects.length));
    };
    const prevProject = ()=>{
        setDir("left");
        setCurr((prev)=>((prev==0)?projects.length-1:prev-1));
    };

    return (
        <section className="projects">
            <div className="FillCard">
                <h1><HoverText>Projects</HoverText> </h1>
                
                <div className="box">
                    <button onClick={prevProject}>
                        <img src={left} alt="Previous"/>
                    </button>
                    <div className="stack">
                        <ProjectCard project={projects[(curr-1+projects.length)%projects.length]} className="left-card"/>
                        <ProjectCard project={projects[curr]} className="center-card"/>
                        <ProjectCard project={projects[(curr+1)%projects.length]} className="right-card"/>
                    </div>
                    <button onClick={nextProject}>
                        <img src={right} alt="Next"/>
                    </button>
                </div>
            </div>

        </section>
    );
}

export default Projects;