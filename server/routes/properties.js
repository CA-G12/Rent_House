const router = require('express').Router();

const {
  getAllProperties, getAllEmptyProperties, getPropertyDetails, searchProperties,
  createProperty,
  rentProperty,
} = require('../controllers');

router.route('/').get(getAllProperties).post(createProperty);
router.get('/empty', getAllEmptyProperties);
router.get('/:propId', getPropertyDetails);
router.get('/search/:keyword', searchProperties);
router.post('/rent', rentProperty);

module.exports = router;
