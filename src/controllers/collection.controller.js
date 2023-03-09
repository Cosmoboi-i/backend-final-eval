const collectionService = require('../services/collection.service');

const getCollectionByContentType = async (req, res, next) => {
  try {
    const { content_type_id } = req.query;
    const collections = await collectionService.getCollectionsByContentType(content_type_id);
    res.status(200).json({ collections, success: true });
  }
  catch (e) {
    next(e);
  }
};

const getCollectionEntryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const collection = await collectionService.getCollectionById(id);
    res.status(200).json({ collection, success: true });
  }
  catch (e) {
    next(e);
  }
};



module.exports = {
  getCollectionByContentType,
  getCollectionEntryById,
}