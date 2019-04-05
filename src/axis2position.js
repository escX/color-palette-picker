import {BAR_POINT_EXCEED, getBarPointRadius} from './utils';

export const barAxisToPosition = function ({context, x, y}) {
  const barPointRadius = getBarPointRadius(context);
  if (context.barHorizontal) {
    return {
      top: -BAR_POINT_EXCEED / 2,
      left: x - barPointRadius
    }
  } else {
    return {
      top: y - barPointRadius,
      left: -BAR_POINT_EXCEED / 2
    }
  }
}

export const panelAxisToPosition = function ({context, x, y}) {
  return {
    top: y - context.panelPointRadius,
    left: x - context.panelPointRadius
  }
}