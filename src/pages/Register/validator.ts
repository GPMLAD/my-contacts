import { z } from "zod"

export const registerSchema = z.object({
  full_name: z.string().nonempty("Name is required!"),
  phone: z.string().regex(/(\d{2})(\d{1})(\d{4})(\d{4})/),
  email: z.string().email("It must be a valid email!"),
  password: z.string().nonempty("Required password!").min(8,"Must contain at least 8 characters"),
  passwordConfirm: z.string().nonempty("Required password!")
}).refine((data) => data.password === data.passwordConfirm,{
  message: "Passwords don't match",
  path: ["passwordConfirm"]
})

export type RegisterData = z.infer<typeof registerSchema>