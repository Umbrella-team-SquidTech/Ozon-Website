// add error messages to the schema, with french
import { z } from "zod";

const CreateEventSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  description: z
    .string()
    .min(2, { message: "La description doit contenir au moins 2 caractères" }),
  address: z.union([z.string().min(4), z.string().length(0)]),
  start: z.date({
    required_error: "La date de début est requise",
  }),
  event_type_id: z.string().min(1, {
    message: "Le type d'événement est requis",
  }),
  limit: z.string().min(1, {
    message: " La limite de participants doit être supérieure à 0",
  }),
  green_pass: z
    .string()
    .min(6, { message: "Le green pass doit contenir au moins 6 caractères" }),
});

export default CreateEventSchema;
