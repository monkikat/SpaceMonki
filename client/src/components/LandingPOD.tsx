import { APODDataType } from "../types/APODDataType"

const LandingPOD = (data: APODDataType) => {    

    return (
        <div className="flex flex-col">
            <div className="flex p-20">
                <img alt="NASA Picure of the Day" 
                src={data.hdurl || data.url}
                className="flex w-screen"/>
            </div>
            <div className="flex justify-between px-20 font-medium text-lg">
                <p className="text-xl">{data.title}</p>
                <p className="text-sm">{data.date}</p>
            </div>
        </div>
    )
}

export default LandingPOD
