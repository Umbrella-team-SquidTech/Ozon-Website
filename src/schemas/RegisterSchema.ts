// a register form that contains the following fields (nom, prenom, email, mot de passe , Confirmer Mot de passe)

import { z } from "zod";

const registerSchema = z.object({
  nom: z.string().min(2, {
    message: "Nom court",
  }),
  prenom: z.string().min(2, {
    message: "prenom court",
  }),
  email: z.string().email({
    message: "Email invalide.",
  }),
  password: z.string().min(6, {
    message: "Password court",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password court",
  }),
});
export default registerSchema;
