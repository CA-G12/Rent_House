const router = require('express').Router();

const { getAllProperties, getAllEmptyProperties } = require('../controllers');

router.get('/', getAllProperties);
router.get('/empty', getAllEmptyProperties);

module.exports = router;
