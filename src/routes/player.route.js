const express = require('express');
const validate = require('../middlewares/validate');
const playerValidation = require('../validations/player.validation');
const playerController = require('../controllers/player.controller');
const router = express.Router();


router
  .route('/')
  .get(validate(playerValidation.getPlayers),playerController.getPlayers)
 
module.exports = router;