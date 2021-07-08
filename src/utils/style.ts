export const toRem = (valueInPx: number): number => {
  if (!valueInPx) {
    return 0;
  }
  return valueInPx / 16;
};
