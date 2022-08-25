const { getOwners } = require('./owners');
const {
  getProperties, getEmptyProperties, getOwnerProperties, getProperty,
  getPropertiesSearch, insertPropertyq, insertUser, editProprtyDates,
} = require('./properties');

module.exports = {
  getOwners,
  getProperties,
  getEmptyProperties,
  getOwnerProperties,
  getProperty,
  getPropertiesSearch,
  insertPropertyq,
  insertUser,
  editProprtyDates,
};
