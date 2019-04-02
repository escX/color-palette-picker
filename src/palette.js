import {getHTMLElement} from './utils';
import create from './create';

let paletteBoxElement = null;

export default class Palette {
  constructor({
    element = null,
    className = '',
    hsl = {h: 0, s: 0, l: 0},
    xRatio = 3,
    yRatio = 2,
    rangePos = 'bottom',
    colorRange = Function(),
  } = Object.create(null)) {
    this.element = getHTMLElement.call(this, element);
    this.className = className;
    this.h = hsl.h;
    this.s = hsl.s;
    this.l = hsl.l;
    this.xRatio = xRatio;
    this.yRatio = yRatio;
    this.rangePos = rangePos;
    this.colorRange = colorRange;
  }

  create () {
    return paletteBoxElement = create.call(this);
  }

  destory () {

  }

  get () {

  }

  set ({h, s, l}) {

  }

  reset () {

  }
}