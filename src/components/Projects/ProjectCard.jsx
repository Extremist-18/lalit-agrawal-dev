import HoverText from "../HoverText/HoverText";

function ProjectCard({project,direction,className}){
    return (
        <div className={`project-card ${direction || ""} ${className || ""}`} onClick={()=> window.open(project.github,"_blank")}>
            <img src={project.image} alt={project.title}/>
            <h2><HoverText>{project.title}</HoverText></h2>
            <p>{project.description}</p>

            <div className="tech">
                {
                    project.tech.map((item,idx)=>(<span key={idx}>{item}</span>))
                }
            </div>
        </div>
    );
}

export default ProjectCard; 