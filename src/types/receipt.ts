import { Item, ItemSchema } from "./item";
import { z } from "zod";
export type Receipt = {
  retailer: string;
  purchaseDate: string;
  purchaseTime: string;
  items: Item[];
  total: string;
};

export const ReceiptSchema = z.object({
  retailer: z.string(),
  purchaseDate: z.string(),
  purchaseTime: z.string(),
  total: z.string(),
  items: z.array(ItemSchema),
});
