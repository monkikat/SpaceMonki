import * as express from 'express';
import { PORT } from './utils/config';
import { connectDB } from './database/db';

/* MongoDB Connection */
connectDB();

/* Configurations */
const app = express();
app.use(express.json());

app.use('/api/apod', require('./routes/APODDataRoutes'));

app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});
