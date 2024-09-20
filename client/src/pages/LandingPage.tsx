/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { APODDataType } from "../types/APODDataType"
import Divider from "../components/Divider";
import { Link } from "react-router-dom";
import ShortPOD from "../components/ShortPOD";

const LandingPage = () => {
    const [PODData, setPODData] = useState<APODDataType | null>(null);
    
    useEffect(() => {
        async function fetchTodayAPOD() {
            const url = 'http://localhost:4000/' + 'api/apod/';

            try{
                const response = await axios.get(url);
                const fetchedData = response.data;
                setPODData(fetchedData);
                console.log(PODData);
            }

            catch (err) {
                throw new Error(`There was an error retrieving data from backend: ${err}`);
            }
        }

        fetchTodayAPOD();
    }, []);

    return (
        <div
        className="pt-40 px-5">
            <div className="flex font-semibold text-9xl pb-20">
                <div>
                    <p>A MERN</p>
                    <p>APOD Project</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col justify-end gap-4 w-3/5 pr-5">
                    <p className="text-3xl">What is an APOD?</p>
                    <p className="text-lg">Since 1995, NASA's Astronomy Picture of the day (APOD) has been showcasing breathtaking images of space, from distant galaxies to celestial events visible from Earth. Each day, a new image is selected by professional astronomers to capture the ebauty and mystery of our universe.</p>
                    <Link to='/todays-pod'>
                        <p className="font-light italic">{`Take a look at today's POD`}</p>
                    </Link>
                </div>
                <div className="flex w-1/2 pl-5">
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
            {/* {
                PODData ? (
                    <LandingPOD date={PODData?.date} explanation={PODData?.explanation} media_type={PODData?.media_type} service_version={PODData?.service_version} title={PODData?.title} url={PODData?.url} />
                ) : (
                    <p>Landing page data loading...</p>
                )
            } */}
        </div>
    )
}

export default LandingPage
