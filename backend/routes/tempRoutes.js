const express = require('express');
const { convertTemp } = require('../controllers/tempController');

const router = express.Router();

router.post('/convert', convertTemp);

module.exports = router;