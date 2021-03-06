"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("./controllers/CreateUserController");
var CreateTagController_1 = require("./controllers/CreateTagController");
var ensureAdmin_1 = require("./middlewares/ensureAdmin");
var AuthenticateUserController_1 = require("./controllers/AuthenticateUserController");
var CreateComplimentController_1 = require("./controllers/CreateComplimentController");
var ensureAuthenticated_1 = require("./middlewares/ensureAuthenticated");
var ListUserSendComplimentsControllers_1 = require("./controllers/ListUserSendComplimentsControllers");
var ListUserReceiveComplimentsControllers_1 = require("./controllers/ListUserReceiveComplimentsControllers");
var ListTagController_1 = require("./controllers/ListTagController");
var ListUsersController_1 = require("./controllers/ListUsersController");
var router = express_1.Router();
exports.router = router;
var createUserController = new CreateUserController_1.CreateUserController();
var createTagController = new CreateTagController_1.CreateTagController();
var authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
var createComplimentController = new CreateComplimentController_1.CreateComplimentController();
var listUserSendComplimentsController = new ListUserSendComplimentsControllers_1.ListUserSendComplimentsController();
var listUserReceiveComplimentsController = new ListUserReceiveComplimentsControllers_1.ListUserReceiveComplimentsController();
var listTagsController = new ListTagController_1.ListTagController();
var listUsersController = new ListUsersController_1.ListUsersController();
router.post('/tags', ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createTagController.handle);
router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliments', ensureAuthenticated_1.ensureAuthenticated, createComplimentController.handle);
router.get('/users/compliments/send', ensureAuthenticated_1.ensureAuthenticated, listUserSendComplimentsController.handle);
router.get('/users/compliments/receive', ensureAuthenticated_1.ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get('/tags', ensureAuthenticated_1.ensureAuthenticated, listTagsController.handle);
router.get('/users', ensureAuthenticated_1.ensureAuthenticated, listUsersController.handle);
