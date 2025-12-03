import mongoose from "mongoose";
const connectdB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mahadusman:j3Y4mFjOzzzdzCZG@portfolio.axnlf.mongodb.net")
        console.log("Mongo db connected")
    } catch (error) {
        console.log("Error=>", error)
        process.exit(1);
    }
}


export default connectdB