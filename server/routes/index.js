const router = require('express').Router();

const owners = require('./owners');
const properties = require('./properties');

router.use('/owners', owners);
router.use('/properties', properties);

module.exports = router;
