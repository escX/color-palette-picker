export const barColorToAxis = function ({context, h}) {
  if (context.barHorizontal) {
    return {
      x: h / 360 * context.barWidth,
      y: context.barHeight / 2
    }
  } else {
    return  {
      x: context.barWidth / 2,
      y: h / 360 * context.barHeight
    }
  }
}

export const panelColorToAxis = function ({context, s, l}) {
  const x = s / 100 * context.panelWidth;
  const y = context.panelHeight - (l / 100 * context.panelHeight);

  return {x, y};
}