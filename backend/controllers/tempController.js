const TempModel = require('../models/tempModel');

const convertTemp = (req, res) => {
  const { value, fromUnit, toUnit } = req.body;
  if (!value || !fromUnit || !toUnit) {
    return res.status(400).json({ error: 'Missing parameters' });
  }
  try {
    const result = TempModel.convert(parseFloat(value), fromUnit, toUnit);
    res.json({ result: result.toFixed(2) }); // Round to 2 decimals
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { convertTemp };