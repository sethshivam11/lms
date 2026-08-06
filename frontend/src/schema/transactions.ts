import z from "zod";

export const amountSchema = z.coerce
  .number()
  .min(1, "Amount cannot be less than 1");
