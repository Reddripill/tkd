import { z } from "zod";

export const recordSchema = z.object({
   name: z.string().min(1, "Обязательное поле").trim(),
   email: z
      .string()
      .min(1, "Обязательное поле")
      .trim()
      .email({ message: "Неверный формат" }),
});

export interface IRecord extends z.infer<typeof recordSchema> {}
