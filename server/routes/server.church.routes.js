const examples = require('../controllers/examples.server.controller.js'),
    express = require('express'), 
    router = express.Router();

var ChurchController = require('../controllers/listings.server.churchcontroller.js');

router.route('/')
  .post(ChurchController.createChurch);

  module.exports = router;