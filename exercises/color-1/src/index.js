export let color = { r: 255, g: 0, b: 0 };

function decimalToHexChannel(dec) {
  let hex = Math.max(0, Math.min(dec, 255)).toString(16);
  if (hex.length === 1) {
    hex = hex + hex;
  }
  return hex;
}
// define the hex property here
Object.defineProperty(color, 'hex', {
  get() {
    return [this.r, this.g, this.b].map(decimalToHexChannel).join('');
  },
  set(newHex) {
    newHex = newHex.length === 3
        ? newHex[0] + newHex[0] + newHex[1] + newHex[1] + newHex[2] + newHex[2]
        : newHex;
    if (newHex.length === 6) {
      this.r = parseInt(newHex.slice(0, 2), 16);
      this.g = parseInt(newHex.slice(2, 4), 16);
      this.b = parseInt(newHex.slice(4, 6), 16);
    }
  }
});