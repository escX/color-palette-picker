import {H_SIZE, S_SIZE, L_SIZE, getHPointRadius} from './utils';

const getLineColor = function ({context, lineIndex}) {
  const colors = [];
  for (let i = 0; i < S_SIZE; i += 1) {
    colors.push(`hsl(${context.h} ${i}% ${L_SIZE - lineIndex - 1}%)`)
  }

  return colors;
}

const getGradientColors = function () {
  const colors = [];
  for (let i = 0; i < H_SIZE; i += 1) {
    colors.push(`hsl(${i}, 100%, 50%)`);
  }

  return colors;
}

export const lineStyle = function ({context, lineIndex}) {
  const lineColor = getLineColor({context, lineIndex}).join(',');
  return {
    width: `${S_SIZE * context.xRatio}px`,
    height: `${context.yRatio}px`,
    margin: '0',
    padding: '0',
    border: 'none',
    outline: 'none',
    background: `linear-gradient(to right, ${lineColor})`
  }
}

export const SLRangeStyle = function (context) {
  return {
    width: `${S_SIZE * context.xRatio}px`,
    height: `${L_SIZE * context.yRatio}px`,
    position: 'relative'
  }
}

export const HRangeStyle = function (context) {
  const gradientColors = getGradientColors().join(',');
  return {
    width: `${context.zWidth}px`,
    height: `${context.zHeight}px`,
    background: context.horizontal ? `linear-gradient(to right, ${gradientColors})` : `linear-gradient(${gradientColors})`
  }
}

export const HRangeWrapStyle = function (context) {
  return {
    width: `${context.zWidth}px`,
    height: `${context.zHeight}px`,
    position: 'relative'
  }
}

export const SLPointStyle = function (context) {
  return {
    width: `${context.radius * 2}px`,
    height: `${context.radius * 2}px`,
    borderRadius: '50%',
    backgroundColor: 'transparent',
    border: '1px solid #fff',
    boxShadow: '0 0 2px 0 #000',
    cursor: 'pointer',
    boxSizing: 'border-box',
    position: 'absolute',
    top: '0',
    left: '0'
  }
}

export const HPointStyle = function (context) {
  return {
    width: `${getHPointRadius(context) * 2}px`,
    height: `${getHPointRadius(context) * 2}px`,
    borderRadius: '50%',
    backgroundColor: '#fff',
    boxShadow: '0 0 2px 0 #000',
    cursor: 'pointer',
    position: 'absolute',
    top: '-3px',
    left: '-3px'
  }
}