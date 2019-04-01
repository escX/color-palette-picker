const SYSTEMSIZE = 101;

const createElement = function ({nodeType, style}) {
  const element = document.createElement(nodeType);
  if (style instanceof Object) {
    for (let i in style) {
      element.style[i] = style[i];
    }
  }
  return element;
}

const getLineColor = function ({lineIndex, context}) {
  const [
    beginH,
    beginS,
    beginL,
    endH,
    endS,
    endL
  ] = [context.h, 0, (SYSTEMSIZE - 1) - lineIndex, context.h, SYSTEMSIZE - 1, (SYSTEMSIZE - 1) - lineIndex];
  return {
    beginColor: `hsl(${beginH} ${beginS}% ${beginL}%)`,
    endColor: `hsl(${endH} ${endS}% ${endL}%)`
  };
}

const createLine = function ({lineIndex, context}) {
  const line = createElement({
    nodeType: 'div',
    style: {
      width: `${SYSTEMSIZE * context.xRatio}px`,
      height: `${context.yRatio}px`,
      margin: '0',
      padding: '0',
      border: 'none',
      outline: 'none',
      background: `linear-gradient(to right, ${getLineColor({lineIndex, context}).beginColor}, ${getLineColor({lineIndex, context}).endColor})`
    }
  });
  return line;
}

const createPanel = function (context) {
  const palettePanelElement = createElement({
    nodeType: 'div',
    style: {
      width: `${SYSTEMSIZE * context.xRatio}px`,
      height: `${SYSTEMSIZE * context.yRatio}px`
    }
  });

  for (let i = 0; i < SYSTEMSIZE; i += 1) {
    const lineElement = createLine({
      lineIndex: i,
      context
    });
    palettePanelElement.appendChild(lineElement);
  }

  return palettePanelElement;
}

const createBox = function(context) {
  const paletteBoxElement = createElement({
    nodeType: 'div'
  });

  const palettePanelElement = createPanel(context);

  paletteBoxElement.appendChild(palettePanelElement);

  return paletteBoxElement;
}

export default function () {
  const context = this;
  const paletteBoxElement = createBox(context);

  context.element.appendChild(paletteBoxElement);

  return paletteBoxElement;
}