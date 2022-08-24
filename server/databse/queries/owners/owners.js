const connection = require('../../config/connection');

const getOwners = () => connection.query('select * from owners');

module.exports = { getOwners };
