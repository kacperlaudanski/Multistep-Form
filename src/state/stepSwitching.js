import { toggleClass } from "../utilities/toggleClass"
import { multistepForm } from "../utilities/domElements"
const formSteps = [...multistepForm.querySelectorAll(`[data-step]`)]
const asideStepsMenu = document.querySelector(`[data-step-menu]`)
const stepNumbers = asideStepsMenu.querySelectorAll(`[data-step-number]`)

export let currentStep = formSteps.findIndex((step) => {
    return step.matches(`[form_step-active]`)
  })

if (currentStep < 0) {
    currentStep = 0
    showCurrentStep(currentStep)
}

export function showCurrentStep(currentStep) {
    formSteps.forEach((step, index) => {
      toggleClass(step, "form_step-active", index === currentStep)
    })
    stepNumbers.forEach((step, index) => {
      toggleClass(step, "step_number-active", index === currentStep)
    })
  }

