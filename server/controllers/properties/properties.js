const {
  getProperties, getEmptyProperties, getOwnerProperties, getProperty,
  getPropertiesSearch, insertPropertyq, insertUser, editProprtyDates,
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
    img, prop_address, price, details, owner_id,
  } = req.body;

  // console.log(req.body);
  insertPropertyq(img, prop_address, price, details, owner_id).then(res.redirect('/')).catch((err) => console.log(err));
};

const rentProperty = (req, res) => {
  const {
    propertyID, userName, startDate, endDate,
  } = req.body;

  editProprtyDates(propertyID, startDate, endDate)
    .then(res.redirect('/'))
    .catch((err) => console.log(err));
};

module.exports = {
  getAllProperties,
  getAllEmptyProperties,
  getAllOwnerProperties,
  getPropertyDetails,
  searchProperties,
  createProperty,
  rentProperty,
};
