import { Request, Response } from "express";
import asyncHandler = require("express-async-handler");
import { addAPOD, fetchAPOD, getRandomAPOD, getRandomAPODS, getReqAPOD, getTodayAPOD, getWeeksAPOD, storeAPOD } from "../services/APODDataServices";

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

//weeks POD
const getWeeksAPODHandler = asyncHandler(async (req: Request, res: Response) => {
    const weeksAPODData = await getWeeksAPOD();

    res.status(200).json(weeksAPODData);
});

//1 random pod
const getRandomAPODHandler = asyncHandler(async (req: Request, res: Response) => {
    const randomAPOD = await getRandomAPOD();

    res.status(200).json(randomAPOD);
});

//multiple random pods
const getRandomAPODSHandler = asyncHandler(async (req: Request, res: Response) => {
    const numOfAPOD = 50;
    const randomAPODS = await getRandomAPODS(numOfAPOD);

    res.status(200).json(randomAPODS);
});

//add APOD to db
const addAPODDataHandler = asyncHandler(async (req: Request, res: Response) => {
    const addedAPODData = await addAPOD(req.body);

    res.status(201).json(addedAPODData);
});

//api call to NASA APOD API
//to fetch numOfAPOD images and store in db
const fetchAndStoreAPODDataHandler = asyncHandler(async (req: Request, res: Response) => {
    const numOfAPOD = 100;
    const fetchedAPODData = await fetchAPOD(numOfAPOD);
    const storedData = await storeAPOD(fetchedAPODData);

    res.status(200).json({ storedData });
});

module.exports = {
    getTodayAPODHandler,
    addAPODDataHandler,
    getReqAPODHandler,
    getWeeksAPODHandler,
    getRandomAPODHandler,
    getRandomAPODSHandler,
    fetchAndStoreAPODDataHandler,
};