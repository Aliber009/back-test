const express = require('express');

const playerRoute = require('./player.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/players',
    route: playerRoute,
  },
  
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
