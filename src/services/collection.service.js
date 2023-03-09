const { collection } = require('../models');

const getCollectionsByContentType = async (content_type_id) => {
  const collection = await collection.findAll({
    where: { content_type_id }
  });
  if (!collection) throw new Error('No collection found');

  return collection;
}

const getCollectionEntryById = async (id) => {
  const entry = await collection.findByPk(id);
  if (!entry) throw new Error('No entry found');

  return entry;
}


module.exports = {
  getCollectionsByContentType,
  getCollectionEntryById,
}