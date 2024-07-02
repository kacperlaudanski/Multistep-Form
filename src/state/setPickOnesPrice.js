import { multistepForm } from "../utilities/domElements"
import { setPrice } from "../utilities/setPrice"
import { setValue } from "../utilities/setValue"

export function setPickOnesPrice(billingType, suffix) {
    const pickOnes = multistepForm.querySelectorAll(".form_add-one_element")
    pickOnes.forEach((pickOne) => {
      const input = pickOne.querySelector(".pick-one-checkbox")
      const pickOnePrice = pickOne.querySelector(`[data-add-one-price]`)
      if (input && pickOnePrice) {
        const price = setPrice(input, `data-${billingType}-price`, suffix)
        if(price) setValue(pickOnePrice, price)
      }
    })
  }