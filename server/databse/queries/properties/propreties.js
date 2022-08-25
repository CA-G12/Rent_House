const connection = require('../../config/connection');

const getProperties = () => connection.query('select * from properties');

const getEmptyProperties = () => connection.query('select * from properties WHERE rent_start is null');

const getOwnerProperties = (ownerId) => connection.query('select * from properties JOIN owners ON owners.id = properties.owner_id WHERE owners.id =  $1', [ownerId]);

const getProperty = (propId) => connection.query('select * from properties WHERE id = $1', [propId]);

const getPropertiesSearch = (keyword) => connection.query(`select * from properties where rent_start is null and prop_address ilike '%${keyword}%'`);
console.log(111);
const insertPropertyq = (photo, address, price, details, ownerId) => connection.query('INSERT INTO properties (prop_address, img, price, details, owner_id) VALUES ( $1, $2, $3, $4, $5) returning *', [address, photo, price, details, ownerId]);
// console.log('photo, address, price, details, ownerId', photo, address, price, details, ownerId);

// INSERT INTO properties (prop_address, img, price, details, owner_id) VALUES ( $1, $2, $3, $4, $5)

const insertUser = (propertyID, renterName) => connection.query('INSERT INTO renters (renter_name, property_id) VALUES ( $1, $2) returning *', [renterName, propertyID]);
const editProprtyDates = (propertyID, startDate, endDate) => connection.query('UPDATE properties SET rent_start = $1 and rent_end = $2  WHERE id = $3 returning *', [startDate, endDate, propertyID]);

module.exports = {
  getProperties,
  getEmptyProperties,
  getOwnerProperties,
  getProperty,
  getPropertiesSearch,
  insertPropertyq,
  insertUser,
  editProprtyDates,
};
