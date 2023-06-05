import { z } from "zod"

export const registerContactSchema = z.object({
  full_name: z.string().nonempty("Name is required!"),
  nickname: z.string().nonempty("Nickname is required!"),
  phone: z.string().regex(/(\d{2})(\d{1})(\d{4})(\d{4})/, "Phone number must be in format '00912345678'!"),
  email: z.string().email("It must be a valid email!"),
  country: z.string().nonempty("Country is required!")
})

export type RegisterContactData = z.infer<typeof registerContactSchema>