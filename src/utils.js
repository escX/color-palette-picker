const H_SIZE = 361; // h: 0 - 360
const S_SIZE = 101; // s: 0% - 100%
const L_SIZE = 101; // l: 0% - 100%
const POINT_BEYOND_LENGTH = 6; // 滑块超出高度/宽度的长度

export const getHPointRadius = function (context) {
  return context.horizontal ? (context.zHeight + POINT_BEYOND_LENGTH) / 2 : (context.zWidth + POINT_BEYOND_LENGTH) / 2;
}

export {H_SIZE, S_SIZE, L_SIZE};