require('dotenv').config();

export const PORT = process.env.PORT || 5000;
export const MONGO_URL = process.env.MONGO_URL || null;
export const NASA_APOD_KEY = process.env.NASA_APOD_KEY || null;