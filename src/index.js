import Palette from '../../src/index';

const instance = new Palette({
  hsl: {
    h: 279,
    s: 50,
    l: 50
  },
  barWidth: 190,
  barHeight: 20,
  barHorizontal: true
});

const panel = instance.create('panel');
const bar = instance.create('bar');

palette.appendChild(panel)
palette.appendChild(bar)