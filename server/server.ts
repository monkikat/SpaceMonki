import * as express from 'express';
import { NASA_APOD_KEY, PORT } from './utils/config';
import { connectDB } from './database/db';
import axios from 'axios';
import APODDataModel from './models/APODDataModel';

const { fetchAndStoreAPODDataHandler } = require('./controllers/APODDataControllers');

/* MongoDB Connection */
connectDB();

/* Configurations */
const app = express();
app.use(express.json());

app.use('/api/apod', require('./routes/APODDataRoutes'));

app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});
