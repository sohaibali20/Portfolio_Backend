import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config'

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
app.use(express.static("Public"));
app.use(cookieParser());

import contactRoute from './routes/contact.routes.js'
// const contactRoute = require("./routes/contact.routes")
app.use("/api/contact", contactRoute);

import getContactRoute from './routes/getContact.routes.js'
app.use("/api/contact", getContactRoute)

import userRoutes from './routes/login.routes.js'
app.use("/api/user", userRoutes)

import authRoutes from './routes/auth.router.js'
app.use("/api/auth", authRoutes)

export { app };
