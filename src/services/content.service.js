const { content_type } = require('../models');
const { NotFoundError } = require('../utils/errors')



const getAllContentTypes = async () => {
  const contentTypes = await content_type.findAll();
  if (!contentTypes) throw new NotFoundError('No database found');
  if (contentTypes.length === 0) throw new NotFoundError('Database is empty');
  return contentTypes;
}

const getContentTypeById = async (id) => {
  const contentType = await content_type.findByPk(id);
  if (!contentType) throw new NotFoundError('content type not found');
  return contentType;
}



module.exports = {
  getAllContentTypes,
  getContentTypeById,
};