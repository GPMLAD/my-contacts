import { useEffect, useState } from "react"
import { api } from "../../services/api"
  import { Contact } from "../../components/Contact"
import { useAuth } from "../../hooks/useAuth"
import { ModalAddContact } from "../../components/ModalAddContact"

export interface Contacts {
  "id": string
  "full_name": string
  "nickname": string
  "email": string
  "phone": string
  "country": string
  "added": string
  "user_id": string
}

export const Dashboard = () => {
  const {logout} = useAuth()
  const [contacts, setContacts] = useState<Contacts[]>([])

  const [isOpenModal, setIsOpenModal] = useState(false)
  const toggleModal = () => setIsOpenModal(!isOpenModal)

  const renderContacts = (contactsToRender: Contacts[]) => {
    return contactsToRender.map(contact => <Contact contact={contact} key={contact.id}/>)
  }

  useEffect(() => {
    
      (async () => {
        const response = await api.get<Contacts[]>("contacts")
        setContacts(response.data)
      })()
    

  },[])

  return(
    <>
    <header className="flex justify-between border-b-2 p-4">
      <h1 className="text-3xl">My Contacts</h1>
      <div className="flex gap-10">
        <button type="button" onClick={toggleModal} className="">New</button>
        <button onClick={logout}>Exit</button>
      </div>
    </header>

    {isOpenModal && <ModalAddContact toggleModal={toggleModal} setContacts={setContacts}/>}

    <main className="pt-4 flex flex-col gap-6 pb-6">
      <div className="flex justify-center">
      </div>

      <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center">
        {renderContacts(contacts)}
      </ul>
      
    </main>
    </>
  )
}