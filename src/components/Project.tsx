import type ProjectModel from "../models/ProjectModel";

import './Project.css'
import Technologies from "./Technologies";

interface ProjectProps {
    project: ProjectModel;
}


function Project({ project } : ProjectProps) {
    return (
        <div
            className="project">

            <img
                className="fixed-image"
                src={ '/resources/projects/images/' + project.image}/>

            <div
                className="project-footer">
                
                <h2>{project.name}</h2>

                <p>
                    {project.description}
                </p>
                <button>
                    <a href={project.link} target="_blank">
                        <img src="/resources/icons/GitHub_Logo_White.png"/>
                        <img src="/resources/icons/github-mark-white.png"/>
                    </a>
                </button>

                <Technologies
                    technologies={project.technologies}/>
            </div>

        </div>
    )
}

export default Project;