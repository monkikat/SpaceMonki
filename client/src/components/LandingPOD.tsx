import { APODDataType } from "../types/APODDataType"

const LandingPOD: React.FC<APODDataType> = ({data}) => {
    
    return data ? (
        <div>
            <img alt="POD" src=".\src\assets\MermaidPOD.jpg" />
            <p>{data.title}</p>
            <p>{data.explanation}</p>
        </div>
    ) : (
        <p>Loading todays picture</p>
    )
}

export default LandingPOD
