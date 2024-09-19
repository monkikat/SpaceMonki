import { APODDataType } from "../types/APODDataType"

const LandingPOD = (data: APODDataType) => {
    
    return (
        <div>
            {
                data.hdurl ? (
                    <img alt="NASA Picure of the Day" src={data.hdurl} />
                ) : (
                    <img alt="NASA Picure of the Day" src={data.url} />
                )
            } 
            <p>{data.title}</p>
            <p>{data.date}</p>
        </div>
    )
}

export default LandingPOD
