import { z } from "zod";
const ValidateEmailSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export default ValidateEmailSchema;
