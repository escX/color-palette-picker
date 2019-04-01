export const getHTMLElement = function (element) {
  if (typeof element === 'string')
    return document.querySelector(element);
  if (element instanceof HTMLElement)
    return element;
  return false;
}