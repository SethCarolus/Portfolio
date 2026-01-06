
import "./Technology.css"

interface TechnologyProps {
    name: string;
}


function Technology({name}: TechnologyProps) {
    return (
        <div
            className="technology">
            <p>{name}</p>
        </div>
    )
}

export default Technology