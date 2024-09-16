import * as express from 'express';
import { Router } from "express";

const router: Router = express.Router();
const {
    getTodayAPODHandler,
    getReqAPODHandler,
    addAPODDataHandler,
} = require('../controllers/APODDataControllers');

router.route('/').get(getTodayAPODHandler).post(addAPODDataHandler);
router.route('/:date').get(getReqAPODHandler);

module.exports = router;