const {
  getProperties, getEmptyProperties, getOwnerProperties, getProperty,
  getPropertiesSearch, insertPropertyq,
} = require('../../databse/queries');

const getAllProperties = (req, res) => {
  getProperties().then((data) => res.json(data.rows)).catch(console.log);
};

const getAllEmptyProperties = (req, res) => {
  getEmptyProperties().then((data) => res.json(data.rows)).catch(console.log);
};

const getAllOwnerProperties = (req, res) => {
  const { ownerId } = req.params;
  getOwnerProperties(ownerId).then((data) => res.json(data.rows)).catch(console.log);
};

const getPropertyDetails = (req, res) => {
  const { propId } = req.params;
  getProperty(propId).then((data) => res.json(data.rows)).catch(console.log);
};

const searchProperties = (req, res) => {
  const { keyword } = req.params;
  getPropertiesSearch(keyword).then((data) => res.json(data.rows)).catch(console.log);
};

const createProperty = (req, res) => {
  const {
    photo, address, price, details, ownerId,
  } = req.body;

  insertPropertyq(photo, address, price, details, ownerId).then(
    (data) => res.json(data.rows),
  ).catch((err) => console.log(err));
};

module.exports = {
  getAllProperties,
  getAllEmptyProperties,
  getAllOwnerProperties,
  getPropertyDetails,
  searchProperties,
  createProperty,
};
