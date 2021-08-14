import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

let app = express();

//setting up the env file
dotenv.config();

//ALL THE MIDDLEWARES
app.use(cors()); //TODO : Set it to only our frontend
app.use(helmet());
app.use(morgan("tiny"));

let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server started on port %d", PORT);
});
