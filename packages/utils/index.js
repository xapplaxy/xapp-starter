export function roundDecimal(amount,fraction) {
  const df = Math.pow(10,fraction);
  return Math.round((amount + Number.EPSILON) * df) / df;
}
