import { z } from "zod";

export const nameSchema = z
  .string()
  .min(8, "Course name cannot be less than 8 characters")
  .max(255, "Course name cannot be more than 255 characters");

export const subDescriptionSchema = z
  .string()
  .min(2, "Sub Description cannot be less than 2 characters")
  .max(100, "Sub description cannot be more than 100 characters");

export const descriptionSchema = z
  .string()
  .transform((html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent?.trim() ?? "";
  })
  .refine(
    (text) => text.length >= 10,
    "Description cannot be less than 10 characters",
  )
  .refine(
    (text) => text.length <= 255,
    "Description cannot be more than 255 characters",
  );

export const categorySchema = z
  .string()
  .min(2, "Category cannot be less than 2 characters")
  .max(20, "Category cannot be less than 20 characters");

export const levelSchema = z
  .string()
  .refine((item) => ["beginner", "intermediate", "advanced"].includes(item), {
    message: "Invalid course level",
  })
  .default("beginner");

export const skillSchema = z
  .string()
  .max(20, "Skill value should not be more than 20 characters")
  .optional();

export const priceSchema = z.coerce
  .number()
  .min(0, "Price cannot be less than 0");
