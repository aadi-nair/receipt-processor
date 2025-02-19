require("dotenv").config();
import express from "express";
import { receiptRouter } from "./routes";

const app = express();
app.use(express.json());
app.use("/receipts", receiptRouter);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
