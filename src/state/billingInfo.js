import { toggleBilling } from "../utilities/domElements"

const suffixes = {
    yearly: "yr",
    monthly: "mo",
  };

export function billingInfo() {
    const isYearly = toggleBilling.checked
    const billingType = isYearly ? "yearly" : "monthly"
    const suffix = suffixes[billingType]
    return { isYearly, billingType, suffix }
  }