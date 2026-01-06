
class ProjectModel {
    
    constructor(name: string, description: string, image: string, link: string, technologies: string[])
    {
        this.name = name;
        this.description = description;
        this.image = image;
        this.link = link;
        this.technologies = technologies;
    }

    public name: string;
    public description: string;
    public image: string;
    public link: string;
    public technologies: string[];
}

export default ProjectModel;