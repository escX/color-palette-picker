import {L_SIZE, RANGE_TYPE_BAR, RANGE_TYPE_PANEL, BAR_POINT_EXCEED, getBarPointRadius, createdElement, setPointPosition, setPointColor} from './utils';
import {lineStyle, panelStyle, barStyle, barWrapStyle, panelPointStyle, barPointStyle} from './style';
import Drag from './drag';
import {panelAxisToPosition, barAxisToPosition} from './axis2position';
import {panelPositionToColor, barPositionToColor} from './position2color';
import {barAxisToColor, panelAxisToColor} from './axis2color';

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
  createdElement.panelPoint = panelPoint;

  for (let lineIndex = 0; lineIndex < L_SIZE; lineIndex += 1) {
    const line = createLine({
      context,
      lineIndex
    });
    panel.appendChild(line);
  }

  panel.appendChild(panelPoint);

  new Drag({
    draggedElement: panelPoint,
    scopeElement: panel,
    allowExceed: {
      x: context.panelPointRadius,
      y: context.panelPointRadius
    },
    clickPosition({x, y}) {
      const {top, left} = panelAxisToPosition({context, x, y});
      setPointPosition({
        element: panelPoint,
        top,
        left
      });

      const color = panelAxisToColor({context, x, y});
      setPointColor({
        s: color.s,
        l: color.l,
        colorRange: context.colorRange
      });
    },
    sliding({top, left}) {
      setPointPosition({
        element: panelPoint,
        top,
        left
      });

      const color = panelPositionToColor({context, top, left});
      setPointColor({
        s: color.s,
        l: color.l,
        colorRange: context.colorRange
      });
    }
  });

  return panel;
}

const createBar = function (context) {
  const bar = createElement({
    nodeType: 'div',
    style: barStyle(context)
  });

  const barPoint = createBarPoint(context);
  createdElement.barPoint = barPoint;

  new Drag({
    draggedElement: barPoint,
    scopeElement: bar,
    allowExceed: {
      x: context.barHorizontal ? getBarPointRadius(context) : BAR_POINT_EXCEED / 2,
      y: context.barHorizontal ? BAR_POINT_EXCEED / 2 : getBarPointRadius(context)
    },
    clickPosition({x, y}) {
      const {top, left} = barAxisToPosition({context, x, y});
      setPointPosition({
        element: barPoint,
        top,
        left
      });

      setPointColor({
        h: barAxisToColor({context, x, y}).h,
        colorRange: context.colorRange
      });
    },
    sliding({top, left}) {
      setPointPosition({
        element: barPoint,
        top,
        left
      });

      setPointColor({
        h: barPositionToColor({context, top, left}).h,
        colorRange: context.colorRange
      });
    }
  });

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

export default function ({context, type}) {
  if (type === RANGE_TYPE_BAR) {
    createdElement.bar = createBar(context);
    return createdElement.bar;
  } else if (type === RANGE_TYPE_PANEL) {
    createdElement.panel = createPanel(context);
    return createdElement.panel;
  }

  return false;
}