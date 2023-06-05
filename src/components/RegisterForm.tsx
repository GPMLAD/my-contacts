import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { registerSchema } from "../pages/Register/validator";
import { Link } from "react-router-dom";


export const RegisterForm = () => {
  const {registerAccount} = useAuth()

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(registerSchema)
  })

  return (
    <div className="base-form">
      <h2 className="text-2xl pb-4">Login</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(registerAccount)}>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="">
            Name
          </label>
          <input
            type="text"
            placeholder="Caio Rolando da Rocha"
            className="input-form"
            {...register('full_name')}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="">
            E-mail
          </label>
          <input
            type="email"
            placeholder="user@mail.com"
            className="input-form"
            {...register('email')}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="">
            Phone
          </label>
          <input
            type="text"
            placeholder="00912345678"
            className="input-form"
            {...register('phone')}
          />
        </div>

        <div>
          <label htmlFor="password" className="">
            Password
          </label>
          <div className="">
            <input
              type="password"
              placeholder="Password"
              className="input-form"
              {...register('password')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="">
            Confirm password
          </label>
          <div className="">
            <input
              type="password"
              placeholder="Password"
              className="input-form"
              {...register('passwordConfirm')}
            />
          </div>
        </div>

        <div>
          <button type="submit" className="font-bold hover:underline">
            Register
          </button>
        </div>

        <p>
          Already have an account?
        </p>

        <Link to="/" className="font-bold hover:underline">Login</Link>
      </form>
    </div>
  );
};
