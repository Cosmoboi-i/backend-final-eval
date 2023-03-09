const { content_type } = require('../models');
const { NotFoundError } = require('../utils/errors')



const getAllContentTypes = async () => {
  const contentTypes = await content_type.findAll();
  if (!contentTypes) throw new NotFoundError('No database found');
  if (contentTypes.length === 0) throw new NotFoundError('Database is empty');
  return contentTypes;
}

module.exports = {
  getAllContentTypes,
};