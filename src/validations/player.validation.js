const Joi = require('joi');


const getPlayers = {
  query: Joi.object().keys({
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    firstname: Joi.string(),
  }),
};
module.exports = {
    getPlayers,
};
  