const router = require('express').Router();

const { getAllOwners } = require('../controllers');

router.get('/', getAllOwners);

module.exports = router;
