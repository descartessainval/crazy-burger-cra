import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputConfig = (newProduct) =>[
    {
      id :"0",
      Icon:<FaHamburger/>,
      name:'title',
      value:newProduct.title,
      type:"text",
      placeholder:"Nom du produit (ex: Super Burger)",
      version:'minimalist'
    }, 
    {
      id: "1",
      Icon:<BsFillCameraFill/>,
      name:'imageSource',
      value:newProduct.imageSource,
      type:"text",
      placeholder:"Lien URL d\'une image(ex: https://photo-de-mon-produit.png",
      version:'minimalist'
    },
    {
      id: "2",
      Icon:<MdOutlineEuro/>,
      name:'price',
      value:newProduct.price ? newProduct.price : "",
      type:"text",
      placeholder:"Price",
      version:'minimalist'
    }
  ]