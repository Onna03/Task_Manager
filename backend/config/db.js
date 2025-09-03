import mongoose from "mongoose";

const connectBD = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.log("Error in DB connection", error);
        process.exit(1);
    }
}

export default connectBD;