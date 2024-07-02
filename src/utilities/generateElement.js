export function generateElement(tagName, classListArr, container) {
    if (typeof tagName !== "string" || !Array.isArray(classListArr) || !(container instanceof HTMLElement)) return
    const newElement = document.createElement(tagName)
    newElement.classList.add(...classListArr)
    container.appendChild(newElement)
    return newElement
  }