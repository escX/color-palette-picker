import {getHTMLElement} from './utils';
import create from './create';

let paletteBoxElement = null;

export default class Palette {
  constructor({
    element = null,
    colorRange = Function(),
    hsl = {h: 0, s: 0, l: 0},
    xRatio = 3,
    yRatio = 2
  } = Object.create(null)) {
    this.element = getHTMLElement.call(this, element);
    this.colorRange = colorRange;
    this.h = hsl.h;
    this.s = hsl.s;
    this.l = hsl.l;
    this.xRatio = xRatio;
    this.yRatio = yRatio;
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