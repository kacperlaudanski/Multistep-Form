import { multistepForm } from "../../utilities/domElements"
import { toggleClass } from "../../utilities/toggleClass"

class FormValidator {
    constructor(form, inputs) {
      this.form = form
      this.inputs = inputs
    }
  
    getValidityStatus() {
      return [...this.inputs].every((input) => input.checkValidity())
    }
  
    validateOnBlur() {
      this.inputs.forEach((input) => {
        input.addEventListener("blur", () => {
          toggleClass(input, "form_step_input-error", !input.checkValidity())
          toggleClass(input.nextElementSibling, "hidden", input.checkValidity())
        });
      });
    }
  
    validateOnClick() {
      const nextButton = this.form.querySelector(`[data-next-step1]`)
      this.inputs.forEach((input) => {
        nextButton.addEventListener("click", () => {
          let validation = input.checkValidity()
          toggleClass(input, "form_step_input-error", !validation)
          toggleClass(input.nextElementSibling, "hidden", validation)
        })
      })
    }
  }

const stepOneInputs = multistepForm.querySelectorAll(`[data-input-step1]`)
export const validation = new FormValidator(multistepForm, stepOneInputs)
