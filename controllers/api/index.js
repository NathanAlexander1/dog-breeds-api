const router = require('express').Router();
const dogBreedRoutes = require('./dogBreedController');

router.use('/dogbreeds', dogBreedRoutes);

module.exports = router;