const examples = require('../controllers/examples.server.controller.js'),
    express = require('express'), 
    router = express.Router();

var UserController = require('../controllers/listings.server.usercontroller.js');

router.route('/GetAllAccounts')
  .post(UserController.listUsers);

router.route('/register')
    .post(UserController.register);

router.route('/login')
    .post(UserController.login);

router.route('/AccountApproval')
    .get(UserController.AccountApproval);

router.route('UpdateUserType')
    .post(UserController.UpdateUserType);

module.exports = router;