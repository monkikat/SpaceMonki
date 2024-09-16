import { Request, Response } from "express";
import asyncHandler = require("express-async-handler");
import { addAPODData, getReqAPOD, getTodayAPOD } from "../services/APODDataServices";

//todays POD
const getTodayAPODHandler = asyncHandler(async (req: Request, res: Response) => {
    const APODData = await getTodayAPOD();

    res.status(200).json(APODData);
});

//requested POD
const getReqAPODHandler = asyncHandler(async (req: Request, res: Response) => {
    const APODData = await getReqAPOD(req.params.date);

    res.status(200).json(APODData);
});

//add APOD to db
const addAPODDataHandler = asyncHandler(async (req: Request, res: Response) => {
    const addedAPODData = await addAPODData(req.body);

    res.status(201).json(addedAPODData);
});

module.exports = {
    getTodayAPODHandler,
    getReqAPODHandler,
    addAPODDataHandler,
};