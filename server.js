import connectDB from "./database/connect.js";
import express from "express";
import dotenv from "dotenv";
import router from "./routes/person.js";
import cors from "cors";
import morgan from "morgan";

// @configuration
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

// @Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(`Server running at http://localhost:${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
