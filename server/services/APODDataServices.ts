import APODDataModel from "../models/APODDataModel";
import { IAPODDataType } from "../schema/APODDataSchema";
import { APODDataType } from "../types/APODDataType";

// get today's APOD data
export async function getTodayAPOD(): Promise<IAPODDataType> {
    try {
        const currentDate = new Date();
        const formattedCurrentDate = currentDate.toISOString().split('T')[0];

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

// get APOD Data using requested date
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

// add APOD Data to the db
export async function addAPODData(APODData: APODDataType): Promise<APODDataType> {
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