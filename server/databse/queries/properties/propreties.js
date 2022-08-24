const connection = require('../../config/connection');

const getProperties = () => connection.query('select * from properties');

const getEmptyProperties = () => connection.query('select * from properties WHERE rent_start is null');

module.exports = { getProperties, getEmptyProperties };
