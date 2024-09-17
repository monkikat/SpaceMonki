import axios from "axios";
import APODDataModel from "../models/APODDataModel";
import { IAPODDataType } from "../schema/APODDataSchema";
import { APODDataType } from "../types/APODDataType";
import { NASA_APOD_KEY } from "../utils/config";

const currentDate = new Date();
const formattedCurrentDate = currentDate.toISOString().split('T')[0];

// get today's APOD data
export async function getTodayAPOD(): Promise<IAPODDataType> {
    try {
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

// get requested date APOD data
export async function getReqAPOD(reqDate: string): Promise<IAPODDataType> {
    try {
        const APODData = await APODDataModel.findOne({ date: reqDate });

        if (!APODData) {
            throw new Error('APOD Data not found')
        }

        return APODData;
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

        const formattedStartDate = startDate.toISOString().split('T')[0];
        const formattedEndDate = endDate.toISOString().split('T')[0];

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

//store fetched data from api to database
export async function storeAPOD(APODData: APODDataType[]): Promise<APODDataType[]> {
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