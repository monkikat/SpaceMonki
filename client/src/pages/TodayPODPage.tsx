/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { APODDataType } from "../types/APODDataType";
import axios from "axios";
import PODDisplay from "../components/WeekPODDisplay";

const TodayPODPage = () => {
  const [PODData, setPODData] = useState<APODDataType | null>(null);
    
    useEffect(() => {
        async function fetchTodayAPOD() {
            const url = 'http://localhost:4000/' + 'api/apod/';

            try{
                const response = await axios.get(url);
                const fetchedData = response.data;
                setPODData(fetchedData);
            }

            catch (err) {
                throw new Error(`There was an error retrieving data from backend: ${err}`);
            }
        }

        fetchTodayAPOD();
    }, []);
    
    return (
      <div>
          {
              PODData ? (
                  <PODDisplay date={PODData?.date} explanation={PODData?.explanation} media_type={PODData?.media_type} service_version={PODData?.service_version} title={PODData?.title} url={PODData?.url} />
              ) : (
                  <p>POD data loading...</p>
              )
          }
      </div>
  )
}

export default TodayPODPage
