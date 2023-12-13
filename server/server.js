import express from "express";
import dotenv from "dotenv";

//dotenv config
dotenv.config();

//custom import
import userRoutes from "./routes/userRoutes.js";

// custom error handler
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

//server
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());

//routes
app.use("/api/users", userRoutes);

//custom middleware
app.use(notFound);
app.use(errorHandler);

//server listening to the port
app.listen(port, () => {
  console.log(`${process.env.NODE_ENV} server started at port : ${port}`);
});