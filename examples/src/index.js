import Palette from '../../src/index';

const instance = new Palette({
  hsl: {
    h: 279,
    s: 50,
    l: 50
  },
  zWidth: '20px',
  zHeight: '100px',
  horizontal: false,
  xRatio: 3,
  yRatio: 1.8
});

const slElement = instance.create('SL');
const hElement = instance.create('H');

palette.appendChild(slElement)
palette.appendChild(hElement)