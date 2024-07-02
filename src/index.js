import "../styles/main.css"
import "../images/bg-sidebar-desktop.svg"
import "../images/bg-sidebar-mobile.svg"
import { pickOnes, toggleBilling } from "./utilities/domElements"
import { handleCheckboxChange } from "./events/handleCheckboxChange"
import { validation } from "./ui/validation/formValidator"
import { handleStepNavigation } from "./events/handleStepNavigation"
import { goToPlanSelectionStep } from "./events/goToPlanSelectionStep"
import { switchBillingType } from "./events/switchBillingType"

handleStepNavigation()
validation.validateOnBlur()
validation.validateOnClick()

pickOnes.forEach((pickOne) => {
  pickOne.addEventListener("change", handleCheckboxChange)
})

toggleBilling.addEventListener("change", switchBillingType)

const changePlanBtn = document.getElementById("change-plan-btn")
changePlanBtn.addEventListener("click", (e) => {
  goToPlanSelectionStep(e)
})
