import {HSIZE, SSIZE, LSIZE} from './utils';

const getLineColor = function ({context, lineIndex}) {
  const colors = [];
  for (let i = 0; i < SSIZE; i += 1) {
    colors.push(`hsl(${context.h} ${i}% ${LSIZE - lineIndex - 1}%)`)
  }

  return colors;
}

const getGradientColors = function () {
  const colors = [];
  for (let i = 0; i < HSIZE; i += 1) {
    colors.push(`hsl(${i}, 100%, 50%)`);
  }

  return colors;
}

export const lineStyle = function ({context, lineIndex}) {
  const lineColor = getLineColor({context, lineIndex}).join(',');
  return {
    width: `${SSIZE * context.xRatio}px`,
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
    width: `${SSIZE * context.xRatio}px`,
    height: `${LSIZE * context.yRatio}px`
  }
}

export const HRangeStyle = function (context) {
  const gradientColors = getGradientColors().join(',');
  return {
    width: context.zWidth,
    height: context.zHeight,
    background: context.horizontal ? `linear-gradient(to right, ${gradientColors})` : `linear-gradient(${gradientColors})`
  }
}