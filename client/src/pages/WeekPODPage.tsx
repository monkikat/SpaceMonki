import axios from "axios";
import { useEffect, useState } from "react"
import PODDisplay from "../components/WeekPODDisplay";
import { APODDataType } from "../types/APODDataType";
import Divider from "../components/Divider";

const WeekPODPage = () => {
  const [weekPODData, setWeekPODData] = useState<APODDataType[] | null>(null);

  useEffect(() => {
    async function fetchWeekAPOD() {
      const url = 'http://localhost:4000/' + 'api/apod/' + 'week';

      try {
        const response = await axios.get(url);
        setWeekPODData(response.data);
      }

      catch (err) {
        throw new Error(`There was an error retrieving weeks pod data from backend: ${err}`)
      }
    }

    fetchWeekAPOD();
  }, []);

  return (
    <div className="pt-40 p-10">
      <div className="font-semibold text-5xl pb-10
      md:text-9xl md:pb-20">
        <p>PODs</p>
        <p>of the Week</p>
      </div>
      <ul>
        {
          weekPODData?.map((PODData) => (
            <li>
              <PODDisplay date={PODData?.date} explanation={PODData?.explanation} media_type={PODData?.media_type} service_version={PODData?.service_version} title={PODData?.title} url={PODData?.url} />
            </li>
          ))
        }
      </ul>
      <Divider/>
    </div>
  )
}

export default WeekPODPage
