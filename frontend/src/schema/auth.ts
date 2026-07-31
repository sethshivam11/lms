import { z } from "zod";

export const nameSchema = z
  .string()
  .min(2, "Name cannot be less than 2 characters")
  .max(255, "Name cannot be more than 255 characters")
  .refine(
    (value) => /[A-Za-z0-9]/.test(value),
    "Name cannot include special characters",
  );

export const emailSchema = z
  .email()
  .min(4, "Email cannot be less than 4 characters")
  .max(255, "Email cannot be more than 255 characters");

export const passwordSchema = z
  .string()
  .min(6, "Password cannot be less than 6 characters")
  .max(255, "Password cannot be more than 255 characters")
  .refine(
    (value) => /[A-Z]/.test(value) && /[a-z]/.test(value),
    "Password must include both uppercase & lowercase letters",
  )
  .refine((value) => /[0-9]/.test(value), "Password must include a number")
  .refine(
    (value) => /[@#$%&*]/.test(value),
    "Password must include a special character",
  );

export const confirmPasswordSchema = z.string();
