import { APODDataType } from "../types/APODDataType"

const LandingPOD = (data: APODDataType) => {    

    return (
        <div className="flex flex-col h-full gap-5 px-5">
            <div className="flex flex-col items-end font-medium text-lg">
                <p className="text-lg">{data.title}</p>
                <p className="text-sm">{data.date}</p>
            </div>
            <div className="flex">
                <img alt="NASA Picure of the Day" 
                src={data.hdurl || data.url}
                className="flex w-screen"/>
            </div>

        </div>
    )
}

export default LandingPOD