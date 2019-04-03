import createRange from './create';

export default class Palette {
  constructor({
    hsl = {h: 0, s: 0, l: 0},
    panelName = 'panel-range',
    panelWidth = 300,
    panelHeight = 185,
    panelPointRadius = 6,
    barName = 'bar-range',
    barWidth = 100,
    barHeight = 10,
    barHorizontal = true,
    colorRange = Function(),
  } = Object.create(null)) {
    this.h = hsl.h;
    this.s = hsl.s;
    this.l = hsl.l;
    this.panelName = panelName;
    this.panelWidth = panelWidth;
    this.panelHeight = panelHeight;
    this.panelPointRadius = panelPointRadius;
    this.barName = barName;
    this.barWidth = barWidth;
    this.barHeight = barHeight;
    this.barHorizontal = barHorizontal;
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
}