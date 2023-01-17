import mongoose from "mongoose";
import colors from "colors"


const connectDb = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.URL , {
            useNewUrlParser : true ,
            useUnifiedTopology : true , 
            // useFindAndModify : true ,
        })
        console.log(`MongoDB Connected ${connect.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error : ${error.message}`.red.bold);
        process.exit();
    }
}

export default connectDb;