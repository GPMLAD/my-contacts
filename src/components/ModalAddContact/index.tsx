import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useAuth } from "../../hooks/useAuth"
import { useForm } from "react-hook-form"
import { registerContactSchema } from "../../pages/Dashboard/validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { Contacts } from "../../pages/Dashboard"

interface ModalAddContactProps{
  toggleModal: () => void
  setContacts: Dispatch<SetStateAction<Contacts[]>>
}

export const ModalAddContact = ({toggleModal}: ModalAddContactProps) => {

  const {registerNewContact} = useAuth()

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(registerContactSchema)
  })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if(!ref.current){
        return
      }

      if(!event.target){
        return
      }

      if(!ref.current.contains(event.target as HTMLElement)){
        toggleModal()
      }
    }

    window.addEventListener("mousedown", handleClick)

    return () => {removeEventListener("mousedown", handleClick)}

  },[toggleModal])

  return createPortal(
    <div className="top-0 bg-black bg-opacity-50 h-screen w-screen fixed flex items-center justify-center">
      
      <div className="base-card p-4 bg-slate-50" ref={ref}>
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
    
    </div>, document.body
  )
}