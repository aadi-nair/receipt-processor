import { Receipt } from "../types";

export const sampleReceiptRecord: { [key: string]: Receipt } = {
  "23ea047c-8046-46cd-8d9f-c4429132a740": {
    retailer: "Target",
    purchaseDate: "2022-01-01",
    purchaseTime: "13:01",
    items: [
      {
        shortDescription: "Mountain Dew 12PK",
        price: "6.49",
      },
      {
        shortDescription: "Emils Cheese Pizza",
        price: "12.25",
      },
      {
        shortDescription: "Knorr Creamy Chicken",
        price: "1.26",
      },
      {
        shortDescription: "Doritos Nacho Cheese",
        price: "3.35",
      },
      {
        shortDescription: "   Klarbrunn 12-PK 12 FL OZ  ",
        price: "12.00",
      },
    ],
    total: "35.35",
  },
  "70fcc998-2d07-4f6c-b487-2a026342db02": {
    retailer: "M&M Corner Market",
    purchaseDate: "2022-03-20",
    purchaseTime: "14:33",
    items: [
      {
        shortDescription: "Gatorade",
        price: "2.25",
      },
      {
        shortDescription: "Gatorade",
        price: "2.25",
      },
      {
        shortDescription: "Gatorade",
        price: "2.25",
      },
      {
        shortDescription: "Gatorade",
        price: "2.25",
      },
    ],
    total: "9.00",
  },

  "d78cefd9-e201-457c-82a7-d07c860daf63": {
    retailer: "Walgreens",
    purchaseDate: "2022-01-02",
    purchaseTime: "08:13",
    total: "2.65",
    items: [
      { shortDescription: "Pepsi - 12-oz", price: "1.25" },
      { shortDescription: "Dasani", price: "1.40" },
    ],
  },

  "2f206737-7dbe-4fca-a06b-548445da5d35": {
    retailer: "Target",
    purchaseDate: "2022-01-02",
    purchaseTime: "13:13",
    total: "1.25",
    items: [{ shortDescription: "Pepsi - 12-oz", price: "1.25" }],
  },
};
