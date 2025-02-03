import { Receipt } from "../types";
import { countAlphanumeric } from "../util/count_alphanumeric";

import { Item } from "../types";

export function calculatePoints(receipt: Receipt): number {
  const total = parseFloat(receipt.total);

  const dateTimeString = `${receipt.purchaseDate}T${receipt.purchaseTime}:00Z`;
  const purchaseDateTime = new Date(dateTimeString);

  const twoPM = new Date(`${receipt.purchaseDate}T14:00:00Z`);
  const fourPM = new Date(`${receipt.purchaseDate}T16:00:00Z`);

  // --- calculating points --

  const alphaNumCount = countAlphanumeric(receipt.retailer);
  const isRoundValue = total % 1 === 0 ? 50 : 0;
  const isQuarterCent = total % 0.25 === 0 ? 25 : 0;
  const itemPairs = Math.trunc(receipt.items.length / 2) * 5;
  const itemPts = receipt.items.reduce(
    (sum, item: Item) =>
      sum +
      (item.shortDescription.trim().length % 3 === 0
        ? Math.ceil(parseFloat(item.price) * 0.2)
        : 0),
    0
  );
  const datePts = purchaseDateTime.getDate() % 2 === 1 ? 6 : 0;
  const timePts =
    purchaseDateTime > twoPM && purchaseDateTime < fourPM ? 10 : 0;

  return (
    alphaNumCount +
    isRoundValue +
    isQuarterCent +
    itemPairs +
    itemPts +
    datePts +
    timePts
  );
}
