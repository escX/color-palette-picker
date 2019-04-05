import {getLineColor} from './style';

const H_SIZE = 361; // h: 0 - 360
const S_SIZE = 101; // s: 0% - 100%
const L_SIZE = 101; // l: 0% - 100%
const RANGE_TYPE_BAR = 'bar';
const RANGE_TYPE_PANEL = 'panel';
const BAR_POINT_EXCEED = 6; // 调色条滑块超出高度/宽度的长度

// 创建出的元素节点
const createdElement = {
  bar: null,
  panel: null,
  barPoint: null,
  panelPoint: null
}

// 当前调色板指定的颜色
const pointColor = {
  h: 0,
  s: 0,
  l: 0
}

export const getBarPointRadius = function (context) {
  return context.barHorizontal ? (context.barHeight + BAR_POINT_EXCEED) / 2 : (context.barWidth + BAR_POINT_EXCEED) / 2;
}

const setPanelColor = function () {
  for (let index = 0, lines = createdElement.panel.childNodes; index < lines.length - 1; index += 1) {
    const line = lines[index];
    const lineColor = getLineColor(index).join(',');

    line.style.background = `linear-gradient(to right, ${lineColor})`;
  }
}

export const setPointPosition = function ({element, top, left}) {
  element.style.top = `${top}px`;
  element.style.left = `${left}px`;
}

export const setPointColor = function ({h, s, l, colorRange}) {
  let hasChange = false;
  h = Math.round(h);
  s = Math.round(s);
  l = Math.round(l);

  if (!isNaN(h) && pointColor.h !== h) {
    hasChange = true;
    pointColor.h = h;
    setPanelColor();
  }

  if (!isNaN(s) && pointColor.s !== s) {
    hasChange = true;
    pointColor.s = Math.round(s);
  }

  if (!isNaN(l) && pointColor.l !== l) {
    hasChange = true;
    pointColor.l = Math.round(l);
  }

  if (hasChange && colorRange instanceof Function) {
    colorRange({
      h: pointColor.h,
      s: pointColor.s,
      l: pointColor.l
    });
  }
}

export {H_SIZE, S_SIZE, L_SIZE, RANGE_TYPE_BAR, RANGE_TYPE_PANEL, BAR_POINT_EXCEED, pointColor, createdElement};