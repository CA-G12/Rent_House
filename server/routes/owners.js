const router = require('express').Router();

const { getAllOwners, getAllOwnerProperties } = require('../controllers');


router.get('/', getAllOwners);
router.get('/:ownerId', getAllOwnerProperties);

module.exports = router;
