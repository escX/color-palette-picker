export const barAxisToColor = function ({context, x, y}) {
  let h = 0;
  if (context.barHorizontal) {
    h = x / context.barWidth * 360;
  } else {
    h = y / context.barHeight * 360;
  }
  return {h};
}

export const panelAxisToColor = function ({context, x, y}) {
  const s = x / context.panelWidth * 100;
  const l = (context.panelHeight - y) / context.panelHeight * 100;

  return {s, l};
}