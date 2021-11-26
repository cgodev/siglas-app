var express = require('express');
var router = express.Router();
var historyController = require('../controllers/historyController');
const cors = require('cors');

/* GET home page. */
router.get('/', cors() ,historyController.getAllHistory);
router.post('/', cors() ,historyController.postHistory);

/* router.post('/saveHistory', historyController.postHistory()); */

module.exports = router;