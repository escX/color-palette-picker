import {H_SIZE, S_SIZE, L_SIZE, pointColor, getBarPointRadius} from './utils';
import {barColorToPosition, panelColorToPosition} from './color2position';

export const getLineColor = function (lineIndex) {
  const colors = [];
  for (let i = 0; i < S_SIZE; i += 1) {
    if (i % 5 === 0) {
      colors.push(`hsl(${pointColor.h} ${i * 10}% ${L_SIZE - lineIndex - 1}%)`);
    }
  }
  return colors;
}

const getBarColor = function () {
  const colors = [];
  for (let i = 0; i < H_SIZE; i += 1) {
    colors.push(`hsl(${i}, 100%, 50%)`);
  }

  return colors;
}

export const lineStyle = function ({context, lineIndex}) {
  const lineColor = getLineColor(lineIndex).join(',');
  return {
    width: `${context.panelWidth}px`,
    height: `${context.panelHeight / L_SIZE}px`,
    margin: '0',
    padding: '0',
    border: 'none',
    outline: 'none',
    background: `linear-gradient(to right, ${lineColor})`
  }
}

export const panelStyle = function (context) {
  return {
    width: `${context.panelWidth}px`,
    height: `${context.panelHeight}px`,
    position: 'relative',
    boxSizing: 'content-box',
    overflow: 'visible'
  }
}

export const barStyle = function (context) {
  const barColor = getBarColor().join(',');
  return {
    width: `${context.barWidth}px`,
    height: `${context.barHeight}px`,
    background: context.barHorizontal ? `linear-gradient(to right, ${barColor})` : `linear-gradient(${barColor})`
  }
}

export const barWrapStyle = function (context) {
  return {
    width: `${context.barWidth}px`,
    height: `${context.barHeight}px`,
    position: 'relative',
    boxSizing: 'content-box',
    overflow: 'visible'
  }
}

export const panelPointStyle = function (context) {
  const pointPosition = panelColorToPosition({
    context,
    s: pointColor.s,
    l: pointColor.l
  });
  return {
    width: `${context.panelPointRadius * 2}px`,
    height: `${context.panelPointRadius * 2}px`,
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: '1px solid #fff',
    boxShadow: '0 0 2px 0 #000',
    cursor: 'pointer',
    boxSizing: 'border-box',
    position: 'absolute',
    top: `${pointPosition.top}px`,
    left: `${pointPosition.left}px`
  }
}

export const barPointStyle = function (context) {
  const barPointPosition = barColorToPosition({
    context,
    h: pointColor.h
  });
  return {
    width: `${getBarPointRadius(context) * 2}px`,
    height: `${getBarPointRadius(context) * 2}px`,
    borderRadius: '50%',
    backgroundColor: '#fff',
    boxShadow: '0 0 2px 0 #000',
    cursor: 'pointer',
    position: 'absolute',
    top: `${barPointPosition.top}px`,
    left: `${barPointPosition.left}px`
  }
}