/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "../components/Header"
import axios from "axios";
import { APODDataType } from "../types/APODDataType"
import LandingPOD from "../components/LandingPOD";


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
        <div>
            <Header/>
            {
                PODData ? (
                    <LandingPOD date={PODData?.date} explanation={PODData?.explanation} media_type={PODData?.media_type} service_version={PODData?.service_version} title={PODData?.title} url={PODData?.url} />
                ) : (
                    <p>Landing page data loading...</p>
                )
            }
        </div>
    )
}

export default LandingPage
