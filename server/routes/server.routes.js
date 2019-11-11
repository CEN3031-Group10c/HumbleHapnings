const examples = require('../controllers/examples.server.controller.js'),
    express = require('express'), 
    router = express.Router(),
    ChurchController = require('../controllers/listings.server.churchcontroller.js')

router.route('/')
  .get(examples.hello);

  
module.exports = router;