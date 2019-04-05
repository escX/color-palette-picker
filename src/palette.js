import createRange from './create';
import {createdElement, pointColor, setPointColor, setPointPosition} from './utils';
import {barColorToPosition, panelColorToPosition} from './color2position';

export default class Palette {
  constructor ({
    hsl = {h: 0, s: 100, l: 50},
    panelName = 'panel-range',
    panelWidth = 300,
    panelHeight = 185,
    panelPointRadius = 6,
    barName = 'bar-range',
    barWidth = 200,
    barHeight = 20,
    barHorizontal = true,
    colorRange = Function(),
  } = Object.create(null)) {
    this.h = pointColor.h = Math.round(hsl.h);
    this.s = pointColor.s = Math.round(hsl.s);
    this.l = pointColor.l = Math.round(hsl.l);
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
    return createRange({
      context: this,
      type
    });
  }

  destory () {
    const panel = createdElement.panel;
    const bar = createdElement.bar;
    const panelPoint = createdElement.panelPoint;
    const barPoint = createdElement.barPoint;

    if (panel) {
      if (panelPoint) {
        panel.removeChild(panelPoint);
        createdElement.panelPoint = null;
      }
      panel.parentNode.removeChild(panel);
      createdElement.panel = null;
    }
    if (bar) {
      if (barPoint) {
        bar.removeChild(barPoint);
        createdElement.barPoint = null;
      }
      bar.parentNode.removeChild(bar);
      createdElement.bar = null;
    }
  }

  get () {
    return pointColor;
  }

  set ({h, s, l}) {
    const {
      top: barTop,
      left: barLeft
    } = barColorToPosition({
      context: this,
      h
    });
    setPointPosition({
      element: createdElement.barPoint,
      top: barTop,
      left: barLeft
    });

    const {
      top: panelTop,
      left: panelLeft
    } = panelColorToPosition({
      context: this,
      s,
      l
    });
    setPointPosition({
      element: createdElement.panelPoint,
      top: panelTop,
      left: panelLeft
    });

    setPointColor({
      h,
      s,
      l
    });
  }
}