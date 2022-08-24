const router = require('express').Router();

const owners = require('./owners');

router.use('/owners', owners);

module.exports = router;
