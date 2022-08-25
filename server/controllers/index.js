const { getAllOwners } = require('./owners');
const {
  getAllProperties, getAllEmptyProperties, getAllOwnerProperties,
  getPropertyDetails, searchProperties, createProperty, rentProperty,
} = require('./properties');

module.exports = {
  getAllOwners,
  getAllProperties,
  getAllEmptyProperties,
  getAllOwnerProperties,
  getPropertyDetails,
  searchProperties,
  createProperty,
  rentProperty,
};
