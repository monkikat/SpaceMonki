import { APODDataType } from "../types/APODDataType"

const LandingPOD = (data: APODDataType) => {    

    return (
        <div className="flex flex-col h-full gap-5 px-5">
            <div className="flex flex-col items-end font-medium text-lg">
                <p className="text-md pb-1
                md:text-lg">{data.title}</p>
                <p className="text-xs pb-1
                md:text-sm">{data.date}</p>
            </div>
            <div className="flex">
                {
                    data.media_type === 'image' ? (
                        <img alt="" 
                        src={data.hdurl || data.url}
                        className="flex w-screen rounded-md
                        transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"/>
                    ) : (
                        <iframe allowFullScreen
                        className="flex h-96 w-96 rounded-md"
                        src={data.hdurl || data.url}
                        ></iframe>
                    )
                }
            </div>

        </div>
    )
}

export default LandingPOD