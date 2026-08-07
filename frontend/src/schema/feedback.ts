import z from "zod";

export const issueSchema = z
  .string()
  .nonempty("Issue is required")
  .min(10, "Issue cannot be less than 10 characters")
  .max(255, "Issue cannot be more than 255 characters");

export const problemSchema = z
  .string()
  .nonempty("Problem is required")
  .min(50, "Problem cannot be less than 50 characters")
  .max(10_000, "Problem cannot be more than 10,000 characters");
