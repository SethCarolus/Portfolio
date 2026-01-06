
import "./Projects.css"
import Project from "./Project";
import ProjectModel from "../models/ProjectModel";

async function getProjectsAsync(): Promise<ProjectModel[]> {
    const res = await fetch("/resources/projects/projects.json");
    const json = await res.json();

    if (json == null) return [];

    return json;
}

const lst = await getProjectsAsync();


function Projects() {
    return (
        <ol
            className="projects">
            {
                (lst != null ?
                    lst.map((p) => {
                        return (
                            <Project
                                project={p}/>
                        )
                    })
                :
                    <p>There are no Projects</p>
                )
            }
        </ol>
    )
}

export default Projects;