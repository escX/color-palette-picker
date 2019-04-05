const addListener = function () {
  const context = this;
  context.draggedElement.onmousedown = function (event) {
    const disX = event.clientX - this.offsetLeft;
    const disY = event.clientY - this.offsetTop;

    document.onmousemove = function (event) {
      let left = event.clientX - disX;
      let top = event.clientY - disY;

      const scopeElement = context.scopeElement;
      const draggedElement = context.draggedElement;
      if (left < -context.allowExceed.x) {
        left = -context.allowExceed.x;
      } else if (left > scopeElement.offsetWidth - draggedElement.offsetWidth + context.allowExceed.x) {
        left = scopeElement.offsetWidth - draggedElement.offsetWidth + context.allowExceed.x;
      }
      if (top < -context.allowExceed.y) {
        top = -context.allowExceed.y;
      } else if (top > scopeElement.offsetHeight - draggedElement.offsetHeight + context.allowExceed.y) {
        top = scopeElement.offsetHeight - draggedElement.offsetHeight + context.allowExceed.y;
      }

      context.sliding({
        top,
        left
      });
    }

    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  };

  context.draggedElement.onclick = function (event) {
    event.stopPropagation();
  };

  context.scopeElement.onclick = function (event) {
    context.clickPosition({
      x: event.layerX,
      y: event.layerY
    });
  }
};

export default class Drag {
  constructor({draggedElement, scopeElement, allowExceed, clickPosition, sliding}) {
    this.draggedElement = draggedElement;
    this.scopeElement = scopeElement;
    this.allowExceed = allowExceed;
    this.clickPosition = clickPosition;
    this.sliding = sliding;

    addListener.call(this);
  }
}