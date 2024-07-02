import { multistepForm } from "../utilities/domElements";
import { toggleClass } from "../utilities/toggleClass";
import { billingInfo } from "./billingInfo";


export function setBillingPlan() {
    const { isYearly } = billingInfo();
    const billingBadges = [
      {
        badge: multistepForm.querySelector(`[data-monthly-billing]`),
        isActive: !isYearly,
      },
      {
        badge: multistepForm.querySelector(`[data-yearly-billing]`),
        isActive: isYearly,
      },
    ];
    billingBadges.forEach(({ badge, isActive }) => {
      if (badge) toggleClass(badge, "active", isActive);
      if (!badge) console.warn("Billing badge element not found");
    });
  }
  