const { content_types } = require('../models');
const { NotFoundError } = require('../utils/errors')



const getAllContentTypes = async () => {
  const contentTypes = await content_types.findAll();
  if (!contentTypes) throw new NotFoundError('No database found');
  if (contentTypes.length === 0) throw new NotFoundError('Database is empty');
  return contentTypes;
}

const getContentTypeById = async (id) => {
  const contentType = await content_types.findByPk(id);
  if (!contentType) throw new NotFoundError('content type not found');
  return contentType;
}

const createContentType = async (name, structure) => {
  const contentType = await content_types.create({ name, structure });
  return contentType;
}

const updateContentType = async (id, name, structure) => {
  const contentType = await content_types.update({ name, structure }, { where: { id } })
  return contentType;
}

const deleteContentType = async (id) => {
  const contentType = await content_types.findOne({ where: { id } });
  if (!contentType) throw new NotFoundError('content type not found');
  await contentType.destroy();
  return contentType;
}

module.exports = {
  getAllContentTypes,
  getContentTypeById,
  createContentType,
  updateContentType,
  deleteContentType,
};