// Implement your color utils here

function decimalToHexChannel(dec) {
  let hex = Math.max(0, Math.min(dec, 255)).toString(16);
  if (hex.length === 1) {
    hex = hex + hex;
  }
  return hex;
}

function standardizeColorHex(colorHex) {
  if (colorHex.length !== 3 && colorHex.length !== 6) throw Error('incorrect color hex format');
  return colorHex.length === 3
      ? colorHex[0] + colorHex[0] + colorHex[1] + colorHex[1] + colorHex[2] + colorHex[2]
      : colorHex;
}

function hexChToDecimal(hex) {
  let [r, g, b] = [
      parseInt(hex.slice(0, 2), 16),
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16)
    ];
  return { r, g, b };
}

export function rgbToHex(r, g, b) {
  return [r, g, b].map(decimalToHexChannel).join('');
}

export function hexToRgb(hex) {
  return hexChToDecimal(standardizeColorHex(hex));
}