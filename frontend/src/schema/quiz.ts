import z from "zod";

export const passMarksSchema = z.coerce
  .number()
  .min(1, "Passing marks cannot be less than 1");

export const questionSchema = z
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

export const optionSchema = z
  .string()
  .min(2, "Option cannot be less than 10 characters")
  .max(255, "Option cannot be more than 255 characters");

export const instructionSchema = z
  .string()
  .transform((html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent?.trim() ?? "";
  })
  .refine(
    (text) => text && text.length >= 10,
    "Description cannot be less than 10 characters",
  )
  .refine(
    (text) => text && text.length <= 1000,
    "Description cannot be more than 255 characters",
  );
