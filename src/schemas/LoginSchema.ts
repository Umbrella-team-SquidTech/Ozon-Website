import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z.string().min(6, {
    message: "Mot de passe doit contenir au moins 6 caractères.",
  }),
});
export default loginSchema;
