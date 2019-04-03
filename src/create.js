import {L_SIZE} from './utils';
import {lineStyle, panelStyle, barStyle, barWrapStyle, panelPointStyle, barPointStyle} from './style';

const RANGE_TYPE_BAR = 'bar';
const RANGE_TYPE_PANEL = 'panel';

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

const createPanelPoint = function (context) {
  return createElement({
    nodeType: 'div',
    style: panelPointStyle(context)
  })
}

const createBarPoint = function (context) {
  return createElement({
    nodeType: 'div',
    style: barPointStyle(context)
  })
}

const createPanel = function (context) {
  const panel = createElement({
    nodeType: 'div',
    style: panelStyle(context),
    attribute: {
      class: context.panelName
    }
  });

  const panelPoint = createPanelPoint(context);

  for (let lineIndex = 0; lineIndex < L_SIZE; lineIndex += 1) {
    const line = createLine({
      context,
      lineIndex
    });
    panel.appendChild(line);
  }

  panel.appendChild(panelPoint);

  return panel;
}

const createBar = function (context) {
  const bar = createElement({
    nodeType: 'div',
    style: barStyle(context)
  });

  const barPoint = createBarPoint(context);

  const barWrap = createElement({
    nodeType: 'div',
    style: barWrapStyle(context),
    attribute: {
      class: context.barName
    }
  });

  barWrap.appendChild(bar);
  barWrap.appendChild(barPoint);

  return barWrap;
}

const createRange = function ({context, type}) {
  if (type === RANGE_TYPE_BAR) {
    return createBar(context);
  } else if (type === RANGE_TYPE_PANEL) {
    return createPanel(context);
  }

  return false;
}

export default function (type) {
  const context = this;

  return createRange({context, type});
}