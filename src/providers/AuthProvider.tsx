import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Home/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../pages/Register/validator";
import { RegisterContactData } from "../pages/Dashboard/validator";

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextValues {
  signIn: (data: LoginData) => void
  registerAccount: (data: RegisterData) => void
  registerNewContact: (data: RegisterContactData) => void
  logout: () => void
  loading: boolean
}

export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)

export const AuthProvider = ({children}: AuthProviderProps) => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("my-contacts:token")

    if(!token){
      setLoading(false)
      return
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`
    setLoading(false)
  },[])

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data)

      const {token} = response.data

      api.defaults.headers.common.Authorization = `Bearer ${token}`
      localStorage.setItem("my-contacts:token", token)

      navigate("dashboard")
    } catch (error) {
      console.error(error)
    }
  }

  const logout = () => {
    navigate('')
    localStorage.removeItem("my-contacts:token")
  }

  const registerAccount = async (data: RegisterData) => {
    try {
      await api.post("/users", {...data})
      navigate("")
    } catch (error) {
      console.error(error)
    }
  }

  const registerNewContact = async(data: RegisterContactData) => {
    try {
      await api.post("/contacts", {...data})
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AuthContext.Provider value={{signIn, registerAccount, logout, registerNewContact,loading}}>
      {children}
    </AuthContext.Provider>
  )
}