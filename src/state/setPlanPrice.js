import { setDiscountBadge } from "../ui/setDiscountBadge"
import { planOptions } from "../utilities/domElements"
import { setPrice } from "../utilities/setPrice"
import { setValue } from "../utilities/setValue"
import { billingInfo } from "./billingInfo"
import { setPickOnesPrice } from "./setPickOnesPrice"

export function setPlanPrice() {
    const { isYearly, billingType, suffix } = billingInfo()
    planOptions.forEach((plan) => {
      const planContainer = plan.closest(".form_plan_option")
      setDiscountBadge(planContainer, isYearly)
      const planPriceElement = planContainer.querySelector(".form_plan_option_price")
      if (planPriceElement) {
        const price = setPrice(plan, `data-${billingType}-price`, suffix)
        if(price) setValue(planPriceElement, price)
      }
    })
    setPickOnesPrice(billingType, suffix)
  }