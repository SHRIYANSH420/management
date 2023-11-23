import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    console.error("Error connecting to Mongoose:", error.message);
    // You might want to rethrow the error if you want the calling code to handle it
    // throw error;
  }
};

export default connect;
