import * as express from 'express';
import { Router } from "express";

const router: Router = express.Router();
const {
    getTodayAPODHandler,
    getReqAPODHandler,
    getWeeksAPODHandler,
    getRandomAPODHandler,
    getRandomAPODSHandler,
    addAPODDataHandler,
    fetchAndStoreAPODDataHandler,
} = require('../controllers/APODDataControllers');

router.route('/').get(getTodayAPODHandler).post(addAPODDataHandler);
router.route('/week').get(getWeeksAPODHandler);
router.route('/randomAPOD').get(getRandomAPODHandler);
router.route('/apiTesting').get(fetchAndStoreAPODDataHandler);
router.route('/randomAPODS').get(getRandomAPODSHandler);
router.route('/:date').get(getReqAPODHandler);

module.exports = router;