import { z } from "zod";

const postSchema = z.object({
  content: z.string().min(1, {
    message: "Le contenu est vide.",
  }),
});

export default postSchema;
