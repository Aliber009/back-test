const Player = require("../models/player.model");
const httpStatus = require('http-status');
//const ApiError = require('../utils/ApiError');

const getPlayers=async(filter,options)=>
{
 const Players = await Player.paginate(filter,options);
 return Players
}

  module.exports = {                                                                                                                                                                                                                                                                                                   
    getPlayers,
  };