import {Router} from 'express';
import { sendReservation } from '../controller/reservation.js';

const reservationRouter = Router();

reservationRouter.post('/send', sendReservation );


export default reservationRouter;