export function setValue(container, value) {
    if (!(container instanceof HTMLElement) || typeof value !== "string")
      console.error("Invalid arguments passed to the function")
    container.innerText = value
  }