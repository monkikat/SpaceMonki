import { APODDataType } from "../types/APODDataType"

const LandingPOD = (data: APODDataType) => {    

    return (
        <div className="flex flex-col">
            <div className="flex">
                <img alt="NASA Picure of the Day" src={data.hdurl || data.url}
                className="flex"/>
            </div>
            <div className="flex flex-col font-medium text-lg">
                <p>{data.title}</p>
                <p>{data.date}</p>
            </div>
        </div>
    )
}

export default LandingPOD
