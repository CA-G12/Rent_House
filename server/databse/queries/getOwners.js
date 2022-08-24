const connection = require('../config/connection');

const selector = 'select * from owners';

const getOwners = () => connection.query(selector);

module.exports = getOwners;
