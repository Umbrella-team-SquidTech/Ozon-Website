import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password should be at least 6 characters.",
  }),
});
export default loginSchema;
