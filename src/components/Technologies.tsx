
import "./Technologies.css"
import Technology from "./Technology";


interface TechnologiesProps {
    technologies: string[];
}


function Technologies({technologies}: TechnologiesProps) {
    return (
        <ul
            className="technologies">
                {
                    (technologies != null ?
                        technologies.map(
                                (t) => {
                                    return (
                                    <Technology name={t}/>
                                    )
                                }
                        ):
                        (<></>))
                    }   
        </ul>
    )
}

export default Technologies;