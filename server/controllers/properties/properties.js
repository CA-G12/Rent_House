const { getProperties, getEmptyProperties } = require('../../databse/queries');

const getAllProperties = (req, res) => {
  getProperties().then((data) => res.json(data.rows)).catch(console.log);
};

const getAllEmptyProperties = (req, res) => {
  getEmptyProperties().then((data) => res.json(data.rows)).catch(console.log);
};

module.exports = { getAllProperties, getAllEmptyProperties };
