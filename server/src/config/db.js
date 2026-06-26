import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    );
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;


//mongodb+srv://t2587575_db_user:ciUnBdXWenEu3Wkn@cluster0.mtt4z2q.mongodb.net/?appName=Cluster0