import { Contacts } from "../pages/Dashboard"
import { BsPencil, BsTrash } from "react-icons/bs"

interface ContactProps {
  contact:Contacts
}

export const Contact = ({contact}: ContactProps) => {
  return (
    <li className="base-card flex flex-col items-center gap-1 w-5/6">
      <h3 className="">
        {contact.full_name}
      </h3>
      <div className="grid grid-cols-2 gap-1">
      <p className="italic text-sm">
        {contact.nickname}
      </p>
      <p className="italic text-sm">
        {contact.email}
      </p>
      <p className="italic text-sm">
        {contact.phone}
      </p>
      <p className="italic text-sm">
        {contact.country}
      </p>
      <p className="italic text-sm">
        {contact.added}
      </p>
      <div className="flex justify-evenly w-full p-2">
        <button>
          <BsPencil/>
        </button>
        <button>
          <BsTrash/>
        </button> 
      </div>
      </div>
    </li>
  )
}