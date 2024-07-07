import { z } from "zod";

const RecoverPassForm = z.object({
  email: z.string().email({ message: "Email invalide" }),
});

export default RecoverPassForm;
