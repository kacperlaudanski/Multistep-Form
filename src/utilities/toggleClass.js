export function toggleClass(element, className, condition) {
   if(!(element instanceof HTMLElement) || typeof className !== 'string') return
    element.classList.toggle(className, condition)
  }