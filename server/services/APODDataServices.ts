import axios from "axios";
import APODDataModel from "../models/APODDataModel";
import { IAPODDataType } from "../schema/APODDataSchema";
import { APODDataType } from "../types/APODDataType";
import { NASA_APOD_KEY } from "../utils/config";

const currentDate = new Date();
const formattedCurrentDate = currentDate.getFullYear() + '-' +
    String(currentDate.getMonth() + 1).padStart(2, '0') + '-' +
    String(currentDate.getDate()).padStart(2, '0');

// utc
// const formattedCurrentDate = currentDate.toISOString().split('T')[0];

// get today's APOD data
export async function getTodayAPOD(): Promise<IAPODDataType> {
    try {
        console.log(formattedCurrentDate);
        const APODData = await APODDataModel.findOne({ date: formattedCurrentDate });

        if (!APODData) {
            throw new Error('Todays APOD Data not found')
        }

        return APODData;
    }

    catch (err) {
        throw new Error(`Error finding todays APOD Data: ${err.message}`);
    }
}

// get requested date APOD data from db / api
export async function getReqAPOD(reqDate: string): Promise<IAPODDataType> {
    try {
        const APODData = await APODDataModel.findOne({ date: reqDate });

        return (!APODData) ? await fetchReqAPOD(reqDate) : APODData;
    }

    catch (err) {
        throw new Error(`Error finding APOD Data: ${err.message}`);
    }
}

// get past week APOD data 
export async function getWeeksAPOD(): Promise<IAPODDataType[]> {
    try {
        const startDate = new Date(currentDate);
        const endDate = new Date(currentDate);

        startDate.setDate(currentDate.getDate() - 7);
        endDate.setDate(currentDate.getDate() - 1);

        const formattedStartDate = startDate.getFullYear() + '-' +
            String(startDate.getMonth() + 1).padStart(2, '0') + '-' +
            String(startDate.getDate()).padStart(2, '0');
        const formattedEndDate = endDate.getFullYear() + '-' +
            String(endDate.getMonth() + 1).padStart(2, '0') + '-' +
            String(endDate.getDate()).padStart(2, '0');

        const weekAPODData = await APODDataModel.find({
            date: {
                '$gte': formattedStartDate,
                '$lte': formattedEndDate,
            }
        });

        if (!weekAPODData) {
            throw new Error('weeks apod data not found');
        }

        return weekAPODData;
    }

    catch (err) {
        throw new Error(`could not find apod data for week: ${err.message}`);
    }
}

// get 1 random APOD data
export async function getRandomAPOD(): Promise<IAPODDataType> {
    try {
        const randomAPODData = await APODDataModel.aggregate([
            {
                $sample: {
                    size: 1
                }
            },
            {
                $match: {
                    media_type: 'image'
                }
            }
        ]);

        if (!randomAPODData) {
            throw new Error('Random APOD couldnt be retrieved')
        }

        return randomAPODData[0];
    }

    catch (err) {
        throw new Error(`Couldnt get a random apod: ${err.message}`)
    }
}

//get multiple random APOD data
export async function getRandomAPODS(numOfAPOD: number): Promise<IAPODDataType[]> {
    try {
        const randomAPODData = await APODDataModel.aggregate([
            {
                $sample: {
                    size: numOfAPOD
                }
            },
            {
                $match: {
                    media_type: 'image'
                }
            }
        ]);

        if (!randomAPODData) {
            throw new Error('Random APOD/s couldnt be retrieved')
        }

        return (numOfAPOD === 1) ? randomAPODData[0] : randomAPODData;
    }

    catch (err) {
        throw new Error(`Couldnt get random apod/s: ${err.message}`)
    }
}

// add APOD Data to db
export async function addAPOD(APODData: APODDataType): Promise<APODDataType> {
    try {
        const newAPODData = await APODDataModel.create(APODData);

        if (!newAPODData) {
            throw new Error('APOD Data could not be created');
        }

        return newAPODData;
    }

    catch (err) {
        throw new Error(`Error creating APOD Data: ${err.message}`);
    }
}

//fetch images from nasa apod api
export async function fetchAPOD(numOfAPOD: number): Promise<IAPODDataType[]> {
    const apiStartDate = new Date(currentDate);
    apiStartDate.setDate(currentDate.getDate() - numOfAPOD);
    const formattedApiStartDate = apiStartDate.toISOString().split('T')[0];

    const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_APOD_KEY}` + `&start_date=${formattedApiStartDate}` + `&end_date=${formattedCurrentDate}`;

    try {
        const response = await axios.get(url);
        const fetchedAPODData = response.data;

        if (!fetchedAPODData) {
            throw new Error('APOD Data not retrieved from api');
        }

        return fetchedAPODData;
    }

    catch (err) {
        throw new Error(`Error retrieving data from nasa apod api: ${err.message}`);
    }
}

//fetch latest from nasa apod api
export async function fetchCurAPOD(): Promise<IAPODDataType> {
    const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_APOD_KEY}` + `&date=${formattedCurrentDate}`;
    console.log(formattedCurrentDate);
    try {
        const response = await axios.get(url);
        const fetchedAPODData = response.data;

        if (!fetchedAPODData) {
            throw new Error('Latest APOD Data not retrieved from api');
        }

        return fetchedAPODData;
    }

    catch (err) {
        throw new Error(`Error retrieving latest data from nasa apod api: ${err.message}`);
    }
}

//fetch requested APOD from api
export async function fetchReqAPOD(reqDate: string): Promise<IAPODDataType> {
    const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_APOD_KEY}` + `&date=${reqDate}`;

    try {
        const response = await axios.get(url);
        const fetchedAPODData = response.data;

        if (!fetchedAPODData) {
            throw new Error('req APOD not retrieved from api');
        }

        return fetchedAPODData;
    }

    catch (err) {
        throw new Error(`Error retrieving req APOD from api: ${err.message}`);
    }
}

//store multiple fetched data from api to database
export async function storeMulAPOD(APODData: APODDataType[]): Promise<APODDataType[]> {
    try {
        const storedAPODData = APODDataModel.create(APODData);

        if (!storedAPODData) {
            throw new Error('Data was not stored');
        }

        return storedAPODData;
    }

    catch (err) {
        throw new Error(`Data could not be stored: ${err.message}`);
    }
}

//store fetched data from api to database
export async function storeAPOD(APODData: APODDataType): Promise<APODDataType> {
    try {
        const storedAPODData = APODDataModel.create(APODData);

        if (!storedAPODData) {
            throw new Error('Data was not stored');
        }

        return storedAPODData;
    }

    catch (err) {
        throw new Error(`Data could not be stored: ${err.message}`);
    }
}

//delete oldest apoddata from db
export async function deleteOldData(): Promise<void> {
    try {
        const numOfAPOD = 100
        const deleteDate = new Date(currentDate);
        deleteDate.setDate(currentDate.getDate() - numOfAPOD);
        const formattedDeleteDate = deleteDate.getFullYear() + '-' +
            String(deleteDate.getMonth() + 1).padStart(2, '0') + '-' +
            String(deleteDate.getDate()).padStart(2, '0');

        const oldestApod = await APODDataModel.deleteOne({ date: formattedDeleteDate });
        if (oldestApod) {
            console.log(oldestApod);
        }
    }
    catch (err) {
        throw new Error(`could not find oldest date`)
    }
}