import {getBarPointRadius} from './utils';

export const barPositionToAxis = function ({context, top, left}) {
  const barPointRadius = getBarPointRadius(context);
  return {
    x: left + barPointRadius,
    y: top + barPointRadius
  }
}

export const panelPositionToAxis = function ({context, top, left}) {
  return {
    x: left + context.panelPointRadius,
    y: top + context.panelPointRadius
  }
}