import { toggleClass } from "../utilities/toggleClass"

export function setDiscountBadge(planContainer, isYearly) {
    if (planContainer) {
      const yearlyDiscountBadge = planContainer.querySelector(".form_yearly_discount_badge")
    if (yearlyDiscountBadge)
      toggleClass(yearlyDiscountBadge, "hidden", !isYearly)
    }
  }