import {barPositionToAxis, panelPositionToAxis} from './position2axis';
import {barAxisToColor, panelAxisToColor} from './axis2color';

export const barPositionToColor = function ({context, top, left}) {
  const {x, y} = barPositionToAxis({context, top, left});
  return barAxisToColor({context, x, y});
}

export const panelPositionToColor = function ({context, top, left}) {
  const {x, y} = panelPositionToAxis({context, top, left});
  return panelAxisToColor({context, x, y});
}