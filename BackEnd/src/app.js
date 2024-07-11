import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Routers
import reservationRouter from "./Router/reservationRouter.js";

app.use("/api/v1/reservation", reservationRouter)



export default app;
