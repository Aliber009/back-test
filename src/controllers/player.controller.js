const { playerService } = require('../services')
const pick = require('../utils/pick');
const httpStatus = require('http-status')
const getPlayers = async (req, res) => {
    const filter = pick(req.query, ['firstname']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    result = await playerService.getPlayers(filter,options);
    res.status(httpStatus.OK).send(result);
  };
  module.exports = {
    getPlayers
}