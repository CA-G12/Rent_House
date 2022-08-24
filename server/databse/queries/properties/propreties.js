const connection = require('../../config/connection');

const getProperties = () => connection.query('select * from properties');

const getEmptyProperties = () => connection.query('select * from properties WHERE rent_start is null');

const getOwnerProperties = (ownerId) => connection.query('select * from properties JOIN owners ON owners.id = properties.owner_id WHERE owners.id =  $1', [ownerId]);

const getProperty = (propId) => connection.query('select * from properties WHERE id = $1', [propId]);

const getPropertiesSearch = (keyword) => connection.query(`select * from properties where rent_start is null and prop_address ilike '%${keyword}%'`);

const insertPropertyq = (photo, address, price, details, ownerId) => connection.query('INSERT INTO properties (prop_address, img, price, details, owner_id) VALUES ( $1, $2, $3, $4, $5) returning *', [address, photo, price, details, ownerId]);
// console.log('photo, address, price, details, ownerId', photo, address, price, details, ownerId);

// INSERT INTO properties (prop_address, img, price, details, owner_id) VALUES ( $1, $2, $3, $4, $5)
module.exports = {
  getProperties,
  getEmptyProperties,
  getOwnerProperties,
  getProperty,
  getPropertiesSearch,
  insertPropertyq,
};
