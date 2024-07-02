import { generatePickOnes } from "../ui/generatePickOnes"
import { pickOnes } from "../utilities/domElements"

export function filterPickOnes() {
    if(!Array.isArray(pickOnes)) return
    try{
      const filteredPickOnes = pickOnes.filter((pickOne) => pickOne.checked)
      generatePickOnes(filteredPickOnes)
    } catch(error){
      console.error('Error filtering pickOnes:', error)
    }
  }