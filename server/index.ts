import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { auth } from "express-oauth2-jwt-bearer";
import { testRouter } from "./routes/test";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(
  auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));

app.use("/test", testRouter);
