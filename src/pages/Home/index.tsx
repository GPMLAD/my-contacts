import { LoginForm } from "../../components/LoginForm"

export const Home = () => {
  return(
    <main className="main-element">
      <h1 className="p-4 text-5xl">My Contacts</h1>
      <LoginForm/>
    </main>
  )
}