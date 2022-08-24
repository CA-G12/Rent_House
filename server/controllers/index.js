const { getAllOwners } = require('./owners');
const {
  getAllProperties, getAllEmptyProperties, getAllOwnerProperties,
  getPropertyDetails, searchProperties, createProperty,
} = require('./properties');

module.exports = {
  getAllOwners,
  getAllProperties,
  getAllEmptyProperties,
  getAllOwnerProperties,
  getPropertyDetails,
  searchProperties,
  createProperty,
};
