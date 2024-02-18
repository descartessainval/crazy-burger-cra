import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import AddForm from "./AdminPanel/AddForm"
import EditForm from "./AdminPanel/EditForm"

export const tabsConfig = [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    labelForm: "Ajouter un nouveau produit au menu",
    isValid: "Ajouté avec succès",
    Content: <AddForm/>
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    labelForm: "Modifier un nouveau produit au menu",
    isValid: "Modifié avec succès",
    Content: <EditForm/>

  },
]


export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected)
}
