import ColorPalettePicker from '../../src/index';

const instance = new ColorPalettePicker({
  colorRange(color) {
    for (let i in color) {
      const input = document.getElementById('color_' + i);
      if (input) {
        input.value = color[i];
      }
    }
  }
});
const panel = instance.create('panel');
const bar = instance.create('bar');

document.getElementById('app').prepend(bar);
document.getElementById('app').prepend(panel);

export const colorChange = function (target) {
  const type = target.dataset.type;
  const value = target.value;
  switch (type) {
    case 'h':
      if (Number(value) > 360) {
        target.value = 360;
      } else if (Number(value) < 0) {
        target.value = 0;
      }
      break;

    default:
      if (Number(value) > 100) {
        target.value = 100;
      } else if (Number(value) < 0) {
        target.value = 0;
      }
  }

  const color = {};
  color[type] = value;
  instance.set(color);
}