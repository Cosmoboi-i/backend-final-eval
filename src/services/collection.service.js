const { collections } = require('../models');

const getCollectionsByContentType = async (content_type_id) => {
  const collection = await collections.findAll({
    where: { content_type_id }
  });
  if (!collection) throw new Error('No collection found');

  return collection;
};


const getCollectionEntryById = async (id) => {
  const entry = await collections.findByPk(id);
  if (!entry) throw new Error('No entry found');

  return entry;
};

const createCollectionEntry = async (content, content_type_id) => {
  console.log(content, content_type_id);
  const entry = await collections.create({ content, content_type_id });
  console.log(entry);
  if (!entry) throw new Error('Entry not created');
  return entry;
};

const updateCollectionEntry = async (id, content, content_type_id) => {
  const entry = await collections.update({ content, content_type_id }, { where: { id } });
  return entry;
};

const deleteCollectionEntry = async (id) => {
  const entry = await collections.destroy({ where: { id } });
  return entry;
};

const deleteCollectionByContentType = async (content_type_id) => {
  const collection = await collections.destroy({
    where: { content_type_id }
  });
  if (!collection) throw new Error('No collection found');

  return collection;
};


module.exports = {
  getCollectionsByContentType,
  getCollectionEntryById,
  createCollectionEntry,
  updateCollectionEntry,
  deleteCollectionEntry,
  deleteCollectionByContentType,
}