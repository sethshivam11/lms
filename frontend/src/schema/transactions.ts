import z from "zod";

export const amountSchema = z.coerce
  .number()
  .nonnegative("Amount cannot be negative")
  .min(1, "Amount cannot be less than 1");
