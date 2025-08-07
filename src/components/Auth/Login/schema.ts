import { z } from "zod";

export const loginSchema = () =>
  z.object({
    email: z.email({ message: "Invalid Email" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    remember_me: z.boolean().optional(),
  });

export type LoginSchemaType = z.infer<ReturnType<typeof loginSchema>>;
