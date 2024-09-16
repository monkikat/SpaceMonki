import { Schema } from "mongoose";
import { APODDataType } from "../types/APODDataType";

export interface IAPODDataType extends APODDataType {
    _id: string;
}

const APODDataSchema = new Schema<IAPODDataType>(
    {
        copyright: {
            type: String,
            required: false,
        },
        date: {
            type: String,
            unique: true,
            required: true,
        },
        hdurl: {
            type: String,
            required: false,
        },
        media_type: {
            type: String,
            required: true,
        },
        service_version: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    }
)

export default APODDataSchema;