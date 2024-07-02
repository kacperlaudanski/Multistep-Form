import { pickOnes } from "../utilities/domElements"
import { filterPickOnes } from "./filterPickOnes"

export function resetPickOnes() {
    pickOnes.forEach((pickOne) => {
      pickOne.checked = false
      filterPickOnes()
    })
  }