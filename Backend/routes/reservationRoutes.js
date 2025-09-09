import {Router} from 'express';
import { sendReservation } from '../controller/reservation.js';

const reservationRouter = Router();

reservationRouter.options('/send', (req, res) => {
  res.sendStatus(200);
});

reservationRouter.post('/send', sendReservation );


export default reservationRouter;
