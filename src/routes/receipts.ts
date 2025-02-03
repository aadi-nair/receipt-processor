import express, { Router, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Receipt, ReceiptSchema } from "../types";
import { calculatePoints } from "../controller/calculate_points";

const receiptRouter: Router = express.Router();

const receiptRecord: { [key: string]: Receipt } = {};

receiptRouter.post("/process", async (req: Request, res: Response) => {
  try {
    const id = uuidv4();

    const parsedResponse = ReceiptSchema.safeParse(req.body);

    if (parsedResponse.success) {
      receiptRecord[id] = parsedResponse.data;
      res.json({ id: id });
    } else {
      console.log(parsedResponse.error.issues);
      res.status(400).json({ message: "The receipt is invalid." });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: `${e}` });
  }
});

receiptRouter.get("/:id/points", async (req: Request, res: Response) => {
  try {
    const receiptId = req.params.id;
    if (receiptId in receiptRecord) {
      const currentReceipt = receiptRecord[receiptId];
      const totalPts = calculatePoints(currentReceipt);

      res.json({ points: totalPts });
    } else res.status(404).json({ message: "No receipt found for that ID." });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: `${e}` });
  }
});

export { receiptRouter };
