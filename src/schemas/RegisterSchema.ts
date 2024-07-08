import { z } from "zod";

const registerSchema = z
  .object({
    nom: z.string().min(2, {
      message: "Nom doit contenir au moins 2 caractères.",
    }),
    prenom: z.string().min(2, {
      message: "Prenom doit contenir au moins 2 caractères.",
    }),
    email: z.string().email({
      message: "Email doit être valide.",
    }),
    password: z.string().min(6, {
      message: "Mot de passe doit contenir au moins 6 caractères.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Mot de passe doit contenir au moins 6 caractères.",
    }),
  })
  .superRefine((input, refinementContext) => {
    if (input.password !== input.confirmPassword) {
      return refinementContext.addIssue({
        path: ["confirmPassword"],
        code: z.ZodIssueCode.custom,
        message: "Le mot de passe ne correspond pas.",
      });
    }
    return true;
  });
export default registerSchema;
