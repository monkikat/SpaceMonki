import { useEffect, useState } from "react";
import axios from "axios";
import { APODDataType } from "../types/APODDataType"
import Divider from "../components/Divider";
import { useNavigate } from "react-router-dom";
import ShortPOD from "../components/ShortPOD";

const LandingPage = () => {
    const [PODData, setPODData] = useState<APODDataType | null>(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        async function fetchRandomAPOD() {
            const url = 'http://localhost:4000/' + 'api/apod/' + 'randomAPOD';

            try{
                const response = await axios.get(url);
                const fetchedData = response.data;
                setPODData(fetchedData);
            }

            catch (err) {
                throw new Error(`There was an error retrieving data from backend: ${err}`);
            }
        }

        fetchRandomAPOD();
    }, []);

    const handleTodayButtonClick = () => {
        const currentDate = new Date();
        const formattedCurrentDate = currentDate.toISOString().split('T')[0];

        navigate(`/pod/${formattedCurrentDate}`);
    }

    const handleSearchButtonClick = () => {
        navigate('/find-a-pod');
    }

    const handleWeekButtonClick = () => {
        navigate('/pods-of-the-week');
    }

    return (
        <div
        className="px-10 py-20
        md:py-40">
            <div className="flex font-semibold text-5xl
            md:text-9xl md:pb-20">
                <div className="py-10">
                    <p>A NASA</p>
                    <p>APOD Project</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row pb-20 justify-between">
                <div className="flex flex-col w-full justify-end gap-4 pr-5
                md:w-3/5 ">
                    <p className="text-xl
                    md:text-3xl">
                        What is an APOD?</p>
                    <p 
                    className="text-md 
                    md:text-lg">
                        Since 1995, NASA's Astronomy Picture of the day (APOD) has been showcasing breathtaking images of space, from distant galaxies to celestial events visible from Earth. Each day, a new image is selected by professional astronomers to capture the beauty and mystery of our universe.</p>
                    <div onClick={handleTodayButtonClick}
                    className="flex flex-row gap-2 cursor-pointer items-center transition-transform duration-100 ease-in-out hover:scale-y-125">
                        <p className="font-light italic text-sm
                        md:text-md">
                            {`Take a look at today's POD`}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 md:size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div className="flex w-full pt-10
                md:w-1/2 md:pl-5 md:pt-0">
                    {
                        PODData ? (
                            <ShortPOD date={PODData?.date} explanation={PODData?.explanation} media_type={PODData?.media_type} service_version={PODData?.service_version} title={PODData?.title} url={PODData?.url} />
                        ) : (
                            <p>Landing page data loading...</p>
                        )
                    }
                </div>
            </div>

            <Divider/>

            <div className="flex flex-col pt-10 justify-between pb-10
            md:flex-row">
                <div className="flex flex-col gap-4 w-full pb-10
                md:w-1/3 md:pb-0">
                    <p className="text-xl md:text-3xl">From NASA'S Collection:</p>
                    <p className="text-md md:text-lg">NASA uses advanced telescopes, space probes and ground-based observatories to capture these incredible images. Whether it's the Hubble Space Telescope peering into distant nebulae, or spacecraft like the Voyager sending back snapshots from the edge of our solar system, each image is a window into space exploration. </p>
                    <div onClick={handleWeekButtonClick}
                    className="flex flex-row font-light gap-2 cursor-pointer items-center transition-transform duration-100 ease-in-out hover:scale-y-125">
                        <p className="font-light italic text-sm md:text-md">{`PODs of the week`}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col gap-4 justify-end w-full 
                md:w-1/3">
                    <p className="text-xl md:text-3xl">Search the cosmos</p>
                    <p className="text-md md:text-lg">Have a date in mind? Look up the POD for any day between June 16, 1995 and today.</p>
                    <div onClick={handleSearchButtonClick}
                    className="flex flex-row font-light gap-2 cursor-pointer items-center transition-transform duration-100 ease-in-out hover:scale-y-125">
                        <p className="font-light italic text-sm md:text-md">{`Find a POD`}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>

            <Divider />


        </div>
    )
}

export default LandingPage
