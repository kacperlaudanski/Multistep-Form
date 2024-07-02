import { multistepForm } from "../utilities/domElements";
import { billingInfo } from "../state/billingInfo";
import { totalCounter } from "../state/totalCounter";
import { setValue } from "../utilities/setValue";

function updateBillingSnippet(isYearly){
  const totalBillingSnippet = multistepForm.querySelector(".billing_snippet")
  if(totalBillingSnippet) setValue(totalBillingSnippet, isYearly ? "year" : "month")
}

function updateTotalPrice(isYearly, suffix){
  const totalPriceContainer = multistepForm.querySelector(".form_summary_total_price")
  const currentPrice = totalCounter.getTotalValue()
  if(currentPrice && totalPriceContainer) setValue(totalPriceContainer, `$${currentPrice}/${suffix}`)
}

export function updateTotalValue() {
    const { isYearly, suffix } = billingInfo()
    updateBillingSnippet(isYearly)
    updateTotalPrice(isYearly, suffix)
  }