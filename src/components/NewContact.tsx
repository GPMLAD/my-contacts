import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { registerContactSchema } from "../pages/Dashboard/validator";


export const NewContact = () => {
  const {registerNewContact} = useAuth()

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(registerContactSchema)
  })


  return (
    <div className="base-card">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(registerNewContact)}>
        <div className="flex gap-1 items-center justify-between">
          <label htmlFor="email" className="">
            Name
          </label>
          <input
            type="text"
            placeholder="Caio Rolando da Rocha"
            className="input-card"
            {...register('full_name')}
          />
        </div>

        <div className="flex gap-1 items-center justify-between">
          <label htmlFor="email" className="">
            Nickname
          </label>
          <input
            type="text"
            placeholder="(o^Caiozin^o)"
            className="input-card"
            {...register('nickname')}
          />
        </div>

        <div className="flex gap-1 items-center justify-between">
          <label htmlFor="email" className="">
            E-mail
          </label>
          <input
            type="email"
            placeholder="caio@mail.com"
            className="input-card"
            {...register('email')}
          />
        </div>

        <div className="flex gap-1 items-center justify-between">
          <label htmlFor="email" className="">
            Phone
          </label>
          <input
            type="text"
            placeholder="00912345678"
            className="input-card"
            {...register('phone')}
          />
        </div>

        <div className="flex gap-1 items-center justify-between">
          <label htmlFor="email" className="">
            Country
          </label>
          <input
            type="text"
            placeholder="Brazil"
            className="input-card"
            {...register('country')}
          />
        </div>

        <div className="flex justify-center">
          <button type="submit" className="font-bold hover:underline">
            Register
          </button>
        </div>

      </form>
    </div>
  );
};
