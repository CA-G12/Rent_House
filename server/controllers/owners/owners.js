const { getOwners } = require('../../databse/queries');

const getAllOwners = (req, res) => {
  getOwners().then((data) => res.json(data.rows)).catch(console.log);
};

module.exports = { getAllOwners };
