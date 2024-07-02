import { currentStep, showCurrentStep } from "../state/stepSwitching";
import { validation } from "../ui/validation/formValidator";
import { multistepForm } from "../utilities/domElements";

export function handleStepNavigation() {
  multistepForm.addEventListener("click", (e) => {
    if (e.target.matches(`[data-next]`)) {
      try {
        const validityStatus = validation.getValidityStatus();
        if (validityStatus) {
          currentStep += 1
          showCurrentStep(currentStep)
        } else {
          console.warn("Form is invalid, cannot proceed to the next step");
        }
      } catch (error) {
        console.error("Error checking validity:", error);
      }
    } else if (e.target.matches(`[data-previous]`)) {
      currentStep -= 1
      showCurrentStep(currentStep)
    }
  })
}
