import { billingInfo } from "../state/billingInfo"
import { multistepForm } from "../utilities/domElements"
import { generateElement } from "../utilities/generateElement"
import { setPrice } from "../utilities/setPrice"
import { setValue } from "../utilities/setValue"


export function generatePickOnes(filteredPickOnes) {
    const { billingType, suffix } = billingInfo()
    const pickOnesContainer = multistepForm.querySelector(".form_summary_selected_add-ones")
    pickOnesContainer.innerHTML = ""
    
    filteredPickOnes.forEach((pickOne) => {
      const container = generateElement("li", ["form_summary_add-one"], pickOnesContainer)
      const name = generateElement("div", ["form_summary_add-one_name"], container)
      const price = generateElement("div", ["form_summary_add-one_price"], container)
      const pickOneName = pickOne.getAttribute(`data-name`)
      const pickOnePrice = setPrice(pickOne, `data-${billingType}-price`, suffix)
      if(name) setValue(name, pickOneName)
      if(price) setValue(price, pickOnePrice)
    })
  }
  