/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react"
import PODDisplay from "../components/PODDisplay";
import { APODDataType } from "../types/APODDataType";


const WeekPODPage = () => {
  const [weekPODData, setWeekPODData] = useState<APODDataType[] | null>(null);

  useEffect(() => {
    async function fetchWeekAPOD() {
      const url = 'http://localhost:4000/' + 'api/apod/' + 'week';

      try {
        const response = await axios.get(url);
        setWeekPODData(response.data);
        console.log(weekPODData);
      }

      catch (err) {
        throw new Error(`There was an error retrieving weeks pod data from backend: ${err}`)
      }
    }

    fetchWeekAPOD();
  }, []);

  return (
    <div>
      <ul>
        {
          weekPODData?.map((PODData) => (
            <li>
              <PODDisplay date={PODData?.date} explanation={PODData?.explanation} media_type={PODData?.media_type} service_version={PODData?.service_version} title={PODData?.title} url={PODData?.url} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default WeekPODPage
