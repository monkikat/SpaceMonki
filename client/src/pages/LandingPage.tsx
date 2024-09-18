import { useEffect, useState } from "react";
import Header from "../components/Header"
import axios from "axios";
import LandingPOD from "../components/LandingPOD";

const LandingPage = () => {
    const [PODData, setPODData] = useState(null);
    
    useEffect(() => {
        async function fetchTodayAPOD() {
            const url = 'http://localhost:4000/' + 'api/apod/';

            try{
                const response = await axios.get(url);
                setPODData(response.data);
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
            <p>This is Landing Page</p>
            <Header/>
            <LandingPOD data={PODData} />
        </div>
    )
}

export default LandingPage
