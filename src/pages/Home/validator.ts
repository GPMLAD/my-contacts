import { z } from "zod"

export const schema = z.object({
  email: z.string().email("It must be a valid email!"),
  password: z.string().nonempty("Required password!")
})

export type LoginData = z.infer<typeof schema>