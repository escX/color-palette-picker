import createRange from './create';

export default class Palette {
  constructor({
    hsl = {h: 0, s: 0, l: 0},
    SLRangeName = 'sl-range',
    HRangeName = 'h-range',
    xRatio = 3,
    yRatio = 2,
    zWidth = 100,
    zHeight = 10,
    horizontal = true,
    radius = 6,
    colorRange = Function(),
  } = Object.create(null)) {
    this.h = hsl.h;
    this.s = hsl.s;
    this.l = hsl.l;
    this.SLRangeName = SLRangeName;
    this.HRangeName = HRangeName;
    this.xRatio = xRatio;
    this.yRatio = yRatio;
    this.zWidth = zWidth;
    this.zHeight = zHeight;
    this.horizontal = horizontal;
    this.radius = radius;
    this.colorRange = colorRange;
  }

  create (type) {
    return createRange.call(this, type);
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