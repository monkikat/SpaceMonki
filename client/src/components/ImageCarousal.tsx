import { useEffect, useState } from "react"
import axios from "axios";
import { ImageCarousalType } from "../types/ImageCarousalType";
import CarousalPODDisplay from "./CarousalPODDisplay";

const ImageCarousal = () => {
    const [imagesData, setImagesData] = useState<ImageCarousalType[] | null>(null);

    useEffect(() => {
        async function fetchAPODData() {
            const url = 'http://localhost:4000/' + 'api/apod/' + 'randomAPODS';

            try{
                const response = await axios.get(url);
                setImagesData(response.data);
            }

            catch (err) {
                throw new Error(`there was an error retrieving carousal images data: ${err}`)
            }
        }

        fetchAPODData();
    }, []);


    return (
        <div className="flex">
            <div className="flex flex-row">
                {
                    imagesData?.map((imageData) => (
                        <li className="list-none">
                            <CarousalPODDisplay url={imageData.url} date={imageData.date} />
                        </li>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageCarousal
