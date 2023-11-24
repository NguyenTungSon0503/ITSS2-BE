import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config/config.js";
// import userRoutes from "./routes/users.routes.js"

const { URL } = config.env;
const app = express();
const corsOptions = { credentials: true, origin: URL || "*" };

app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/api/users", userRoutes)

export default app;
