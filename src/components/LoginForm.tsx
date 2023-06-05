import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "../pages/Home/validator";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";


export const LoginForm = () => {
  const {signIn} = useAuth()

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema)
  })


  return (
    <div className="base-form">
      <h2 className="text-2xl pb-4">Login</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(signIn)}>
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
          <button type="submit" className="font-bold hover:underline">
            Sign in
          </button>
        </div>

        <p>
          Don't have an account yet?
        </p>

        <Link to="/register" className="font-bold hover:underline">Register</Link>
      </form>
    </div>
  );
};
