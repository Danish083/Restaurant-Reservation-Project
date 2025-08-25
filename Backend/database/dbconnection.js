import mongoose from "mongoose";

export const dbConnection = async function () {
    try{
    await mongoose.connect(process.env.MONGO_URI,{
        dbName : "RESTAURANT"
    });
    console.log("Conncected to Database!");
    }catch(e){
        let err = e;
        console.log('Unable to connect due to ' + err);
    }
    

}