import {L_SIZE} from './utils';
import {lineStyle, SLRangeStyle, HRangeStyle, HRangeWrapStyle, SLPointStyle, HPointStyle} from './style';

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
  return createElement({
    nodeType: 'div',
    style: lineStyle({context, lineIndex})
  });
}

const createSLPoint = function (context) {
  return createElement({
    nodeType: 'div',
    style: SLPointStyle(context)
  })
}

const createHPoint = function (context) {
  return createElement({
    nodeType: 'div',
    style: HPointStyle(context)
  })
}

const createSLRange = function (context) {
  const SLRange = createElement({
    nodeType: 'div',
    style: SLRangeStyle(context),
    attribute: {
      class: context.SLRangeName
    }
  });

  const SLPoint = createSLPoint(context);

  for (let lineIndex = 0; lineIndex < L_SIZE; lineIndex += 1) {
    const lineElement = createLine({
      context,
      lineIndex
    });
    SLRange.appendChild(lineElement);
  }

  SLRange.appendChild(SLPoint);

  return SLRange;
}

const createHRange = function (context) {
  const HRange = createElement({
    nodeType: 'div',
    style: HRangeStyle(context)
  });

  const HPoint = createHPoint(context);

  const wrap = createElement({
    nodeType: 'div',
    style: HRangeWrapStyle(context),
    attribute: {
      class: context.HRangeName
    }
  });

  wrap.appendChild(HRange);
  wrap.appendChild(HPoint);

  return wrap;
}

const createRange = function ({context, type}) {
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