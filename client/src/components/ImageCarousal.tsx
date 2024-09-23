import { useEffect, useState } from "react"
import axios from "axios";
import { ImageCarousalType } from "../types/ImageCarousalType";
import { motion } from "framer-motion";

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
        <div className="flex flex-row justify-center my-20 w-fit overflow-hidden">
            {/* <div className="flex flex-row">
                {
                    imagesData?.map((imageData) => (
                        <li className="list-none">
                            <CarousalPODDisplay url={imageData.url} date={imageData.date} />
                        </li>
                    ))
                }
            </div> */}
            <motion.div className="flex flex-row h-96 cursor-grab overflow-hidden">
                <motion.div drag='x' dragConstraints={{right: 0}} className="flex w-fit">
                    {
                        imagesData?.map((imageData) => (
                            <motion.div dragConstraints={{left:12}} className="flex flex-none" key={imageData.date}>
                                <img src = {imageData.hdurl || imageData.url}
                                className="rounded-lg mx-20 pointer-events-none"/>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ImageCarousal
