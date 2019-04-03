import {getBarPointRadius} from './utils';

export const getBarPosition = function ({context, x, y}) {
  const barPointRadius = getBarPointRadius(context);
  return {
    top: y - barPointRadius,
    left: x - barPointRadius
  }
}

export const getPanelPosition = function ({context, x, y}) {
  return {
    top: y - context.panelPointRadius,
    left: x - context.panelPointRadius
  }
}