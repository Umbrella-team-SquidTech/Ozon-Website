// a register form that contains the following fields (nom, prenom, email, mot de passe , Confirmer Mot de passe)

import { z } from "zod";

const registerSchema = z.object({
  nom: z.string().min(2, {
    message: "Nom doit contenir au moins 2 caractères.",
  }),
  prenom: z.string().min(2, {
    message: "prenom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Email doit être valide.",
  }),
  password: z.string().min(6, {
    message: "Password should be at least 6 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password should be at least 6 characters.",
  }),
});
export default registerSchema;
