import { billingInfo } from "../state/billingInfo"
import { filterPickOnes } from "../state/filterPickOnes"
import { totalCounter } from "../state/totalCounter"
import { updateTotalValue } from "../ui/updateTotalValue"

export function handleCheckboxChange(event){
    const pickOne = event.target 
    const { billingType } = billingInfo()
    const priceToChange = pickOne.dataset[`${billingType}Price`]
    if(priceToChange){
      if(pickOne.checked) totalCounter.incrementValue(priceToChange)
      if(!pickOne.checked) totalCounter.decrementValue(priceToChange)
    }
   updateTotalValue()
   filterPickOnes()
  }