import {barColorToAxis, panelColorToAxis} from './color2axis';
import {barAxisToPosition, panelAxisToPosition} from './axis2position';

export const barColorToPosition = function ({context, h}) {
  const {x, y} = barColorToAxis({context, h});
  return barAxisToPosition({context, x, y});
}

export const panelColorToPosition = function ({context, s, l}) {
  const {x, y} = panelColorToAxis({context, s, l});
  return panelAxisToPosition({context, x, y});
}