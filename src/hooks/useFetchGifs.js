import { useEffect, useState } from "react"
import { GetGifs } from "../helpers/getGifs"

export const useFetchGifs = ({categoria}) => {
    const [images, setImages] = useState([])
    const [isLoading,setIsLoading] = useState(true)

  const getImages = async () =>{
    const newImages = await GetGifs(categoria)
   setTimeout(() => {
    setImages(newImages)
    setIsLoading(false)
   }, 2000);
  }

  useEffect(() => {
    getImages()
  },[])
  return {
    images,
    isLoading,
  }
    
  
}
