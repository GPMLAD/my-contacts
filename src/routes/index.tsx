import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Dashboard } from "../pages/Dashboard"
import { Register } from "../pages/Register"
import { ProtectedRoutes } from "./ProctedRoutes"

export const RoutesMain = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
    </Routes>
  )
}