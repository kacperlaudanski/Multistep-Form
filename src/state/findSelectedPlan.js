import { planOptions } from "../utilities/domElements";
import { handleSelectedPlan } from "./handleSelectedPlan";

export function findSelectedPlan(options) {
  if (!Array.isArray(options)) return
  try{
    let defaultOption = options.find((option) => option.checked)
    handleSelectedPlan(defaultOption)
    options.forEach((option) => {
      option.addEventListener("change", () => {
        let selectedOption = options.find((option) => option.checked)
        handleSelectedPlan(selectedOption)
      })
    })
  }catch(error){
     console.error('Error in findSelectedPlan', error)
  }
}
findSelectedPlan(planOptions)
