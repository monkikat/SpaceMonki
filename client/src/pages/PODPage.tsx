/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { APODDataType } from "../types/APODDataType";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReqPODDisplay from "../components/ReqPODDisplay";
import Divider from "../components/Divider";

const PODPage = () => {
    const {date} = useParams();
    const [PODData, setPODData] = useState<APODDataType | null>(null);

    useEffect(() => {
        async function fetchPODData() {
            const url = 'http://localhost:4000/' + 'api/apod/' + `${date}`;
            console.log(url);

            try{
                const response = await axios.get(url);
                setPODData(response.data)
            }

            catch(err) {
                throw new Error(`There was an error retrieving requested pod data from backend: ${err}`);
            }
        }

        fetchPODData();
    }, []);


    return (
        <div className="pt-40 p-10">
            {
                PODData ? (
                    <ReqPODDisplay date={PODData.date} explanation={PODData.explanation} media_type={PODData.media_type} service_version={PODData.service_version} title={PODData.title} url={PODData.url} />
                ) : (
                    <p>loading.....</p>
                )
            }
            <Divider/>
        </div>
    )
}

export default PODPage
