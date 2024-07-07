import { z } from "zod";
const ValidateEmailSchema = z.object({
  pin: z.string().min(6, {
    message: "Votre code doit contenir au moins 6 caractères.",
  }),
});

export default ValidateEmailSchema;
