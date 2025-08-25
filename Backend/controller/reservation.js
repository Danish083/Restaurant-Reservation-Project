import ErrorHandler from "../error/error.js";
import { ReservationModel } from "../models/reservationSchema.js";

export const sendReservation = async function (req,res,next) {
    const {firstName, lastName, email, phone, time, date} = req.body;
    if(!firstName || !lastName || !email || !phone || !time || !date){
        return next(new ErrorHandler("Please fill full reservation form", 404));
    }

    try{
        await ReservationModel.create({firstName, lastName, email, phone, date, time});
        res.status(200).json({
            success : true,
            message : "Reservation done successfully"
        });
    }catch(error){
        if(error.name === "ValidationError"){ 
            const ValidationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(ValidationErrors.join(" , "), 400));
        }
        return next(error);
    }
}