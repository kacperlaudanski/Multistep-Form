export function setPrice(element, priceAttr, suffix){
  if(!(element instanceof HTMLElement) || typeof priceAttr !== 'string' || typeof suffix !== 'string') return
    const price = element.getAttribute(priceAttr)
    return price ? `$${price}/${suffix}` : null
  }