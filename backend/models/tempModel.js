class TempModel {
  static convert(value, fromUnit, toUnit) {
    let celsius;
    // Convert to Celsius first
    switch (fromUnit.toUpperCase()) {
      case 'C':
        celsius = value;
        break;
      case 'F':
        celsius = (value - 32) * 5 / 9;
        break;
      case 'K':
        celsius = value - 273.15;
        break;
      default:
        throw new Error('Invalid fromUnit');
    }

    // Convert from Celsius to target unit
    switch (toUnit.toUpperCase()) {
      case 'C':
        return celsius;
      case 'F':
        return celsius * 9 / 5 + 32;
      case 'K':
        return celsius + 273.15;
      default:
        throw new Error('Invalid toUnit');
    }
  }
}

module.exports = TempModel;