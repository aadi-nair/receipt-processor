import { z } from "zod";
export type Item = {
  shortDescription: string;
  price: string;
};

export const ItemSchema = z.object({
  shortDescription: z.string(),
  price: z.string(),
});
