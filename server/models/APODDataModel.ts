import { model } from "mongoose";
import APODDataSchema, { IAPODDataType } from "../schema/APODDataSchema";

const APODDataModel = model<IAPODDataType>("APODDataModel", APODDataSchema);

export default APODDataModel;