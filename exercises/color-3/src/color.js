import { hexToRgb, rgbToHex } from './color-utils';

// TODO implement Color type
class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

Object.defineProperty(Color.prototype, 'hex', {
  get() {
    return rgbToHex(this.r, this.g, this.b);
  },
  set(newHex) {
    const {r, g, b} = hexToRgb(newHex);
    this.r = r;
    this.g = g;
    this.b = b;
  }
});

Color.fromHex = function(hex) {
  const {r, g, b} = hexToRgb(hex);
  return new Color(r, g, b);
}

export { Color };