import {LSIZE} from './utils';
import {lineStyle, SLRangeStyle, HRangeStyle} from './style';

const RANGE_TYPE_H = 'H';
const RANGE_TYPE_SL = 'SL';

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

const createLine = function ({context, lineIndex}) {
  const line = createElement({
    nodeType: 'div',
    style: lineStyle({context, lineIndex})
  });

  return line;
}

const createSLRange = function (context) {
  const SLRange = createElement({
    nodeType: 'div',
    style: SLRangeStyle(context),
    attribute: {
      class: context.SLRangeName
    }
  });

  for (let lineIndex = 0; lineIndex < LSIZE; lineIndex += 1) {
    const lineElement = createLine({
      context,
      lineIndex
    });
    SLRange.appendChild(lineElement);
  }

  return SLRange;
}

const createHRange = function (context) {
  const HRange = createElement({
    nodeType: 'div',
    style: HRangeStyle(context),
    attribute: {
      class: context.HRangeName
    }
  });

  return HRange;
}

const createRange = function({context, type}) {
  if (type === RANGE_TYPE_H) {
    return createHRange(context);
  } else if (type === RANGE_TYPE_SL) {
    return createSLRange(context);
  }

  return false;
}

export default function (type) {
  const context = this;
  return createRange({context, type});
}