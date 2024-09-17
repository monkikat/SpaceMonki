import * as express from 'express';
import { Router } from "express";

const router: Router = express.Router();
const {
    getTodayAPODHandler,
    getReqAPODHandler,
    getWeeksAPODHandler,
    addAPODDataHandler,
    fetchAndStoreAPODDataHandler,
} = require('../controllers/APODDataControllers');

router.route('/').get(getTodayAPODHandler).post(addAPODDataHandler);
router.route('/week').get(getWeeksAPODHandler);
router.route('/apiTesting').get(fetchAndStoreAPODDataHandler);
router.route('/:date').get(getReqAPODHandler);

module.exports = router;