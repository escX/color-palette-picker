const SYSTEMSIZE = 101;

const createElement = function ({nodeType, style, attribute}) {
  const element = document.createElement(nodeType);

  if (style instanceof Object) {
    for (let i in style) {
      element.style[i] = style[i];
    }
  }

  if (attribute instanceof Object) {
    for (let i in attribute) {
      element.setAttribute(i, attribute[i]);
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

const createSLRange = function (context) {
  const SLRange = createElement({
    nodeType: 'div',
    style: {
      width: `${SYSTEMSIZE * context.xRatio}px`,
      height: `${SYSTEMSIZE * context.yRatio}px`
    },
    attribute: {
      class: 'sl-range'
    }
  });

  for (let i = 0; i < SYSTEMSIZE; i += 1) {
    const lineElement = createLine({
      lineIndex: i,
      context
    });
    SLRange.appendChild(lineElement);
  }

  return SLRange;
}

const createHRange = function (context) {
  const HRange = createElement({
    nodeType: 'div',
    style: {

    },
    attribute: {
      class: 'h-range'
    }
  });

  return HRange;
}

const createBox = function(context) {
  const paletteBox = createElement({
    nodeType: 'div',
    style: {
      width: `${SYSTEMSIZE * context.xRatio}px`,
      boxShadow: '0 0 5px 0'
    },
    attribute: {
      class: 'palette-box'
    }
  });

  const SLRange = createSLRange(context);
  const HRange = createHRange(context);
  paletteBox.appendChild(SLRange);
  paletteBox.appendChild(HRange);

  return paletteBox;
}

export default function () {
  const context = this;
  const paletteBox = createBox(context);

  context.element.appendChild(paletteBox);

  return paletteBox;
}