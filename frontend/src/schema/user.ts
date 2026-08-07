import z from "zod";

export const bioSchema = z
  .string()
  .min(10, "Bio cannot be less than 10 characters")
  .max(10000, "Bio cannot be more than 10,000 characters");
