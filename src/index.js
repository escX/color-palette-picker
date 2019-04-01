import Palette from '../../src/index';

const instance = new Palette({
  element: '#palette',
  hsl: {
    h: 279,
    s: 50,
    l: 50
  },
  xRatio: 2,
  yRatio: 2
});

instance.create();