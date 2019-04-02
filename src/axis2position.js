import {getHPointRadius} from './utils';

export const getHPosition = function ({context, x, y}) {
  const radius = getHPointRadius(context);
  return {
    top: y - radius,
    left: x - radius
  }
}

export const getSLPosition = function ({context, x, y}) {
  return {
    top: y - context.radius,
    left: x - context.radius
  }
}