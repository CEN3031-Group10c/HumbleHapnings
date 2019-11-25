const examples = require('../controllers/examples.server.controller.js'),
    express = require('express'), 
    router = express.Router();

var EventController = require('../controllers/listings.server.eventcontroller.js');

router.route('/create')
  .post(EventController.createEvent);

router.route('/list')
    .get(EventController.listEvent);

  module.exports = router;