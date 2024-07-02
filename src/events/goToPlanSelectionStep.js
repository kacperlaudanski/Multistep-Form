import { currentStep, showCurrentStep } from "../state/stepSwitching"
import { updateTotalValue } from "../ui/updateTotalValue"

export function goToPlanSelectionStep(e){
    e.preventDefault()
    currentStep = 1
    updateTotalValue()
    showCurrentStep(currentStep)
}