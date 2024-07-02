import { updateTotalValue } from "../ui/updateTotalValue"
import { multistepForm } from "../utilities/domElements"
import { setPrice } from "../utilities/setPrice"
import { setValue } from "../utilities/setValue"
import { billingInfo } from "./billingInfo"
import { resetPickOnes } from "./resetPickOnes"
import { totalCounter } from "./totalCounter"

function updatePlanName(container, plan, billingType){
  const nameContainer = container.querySelector(".form_summary_name")
  const planName = plan.dataset.name
  if(nameContainer) setValue(nameContainer, `${planName} (${billingType})`)
}

function updatePlanPrice(container, plan, billingType, suffix){
  const priceContainer = container.querySelector(".form_summary_plan_price")
  if(priceContainer){
    const price = setPrice(plan, `data-${billingType}-price`, suffix)
    if(price) setValue(priceContainer, price)
  }
}

function resetAndRecalculate(plan, billingType){
  const priceToAdd = plan.dataset[`${billingType}Price`]
  totalCounter.resetCounter()
  totalCounter.incrementValue(priceToAdd)
  resetPickOnes()
  updateTotalValue()
}

export function handleSelectedPlan(plan) {
    if (!plan) return
    const { billingType, suffix } = billingInfo()
    const containerForData = multistepForm.querySelector(".form_summary_selected_plan")
    updatePlanName(containerForData, plan, billingType)
    updatePlanPrice(containerForData, plan, billingType, suffix)
    resetAndRecalculate(plan, billingType)
  }