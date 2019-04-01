const getHTMLElement = element => {
  if (typeof element === 'string')
    return document.querySelector(element);
  if (element instanceof HTMLElement)
    return element;
  return false;
}

export default class Palette {
  constructor(element) {
    this.element = getHTMLElement(element);
  }
}