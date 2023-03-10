const contentService = require('../services/content.service');
const collectionService = require('../services/collection.service');

// const content = {
//   id: 1,
//   name: 'test',
//   structure: {
//     title: {
//       type: 'text',
//       required: true,
//     },
//     description: {
//       type: 'text',
//       required: true,
//     },
//   },
// };

const getAllContentTypes = async (req, res, next) => {
  try {
    const contentTypes = await contentService.getAllContentTypes();
    res.status(200).json({ contentTypes, success: true });
  } catch (e) {
    next(e);
  }
};

const getContentTypeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contentType = await contentService.getContentTypeById(id);
    res.status(200).json({ contentType, success: true });
  } catch (e) {
    next(e);
  }
};

const createContentType = async (req, res, next) => {
  try {
    const { name, structure = "" } = req.body;
    const contentType = await contentService.createContentType(name, structure);
    res.status(201).json({ message: "content type created", contentType, success: true });
  } catch (e) {
    next(e);
  }
};

const updateContentType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, structure } = req.body;
    const contentType = await contentService.updateContentType(id, name, structure);

    const collection = await collectionService.getCollectionsByContentType(id);

    for (index in collection) {
      let content = collection[index].content;
      let newContent = {};
      for (key in structure) {
        newContent[key] = [structure[key][0], content[key] ? content[key][1] : ""];
      }
      await collectionService.updateCollectionEntry(collection[index].id, newContent, collection[index].content_type_id);
    }



    res.status(200).json({ message: "content type updated", contentType, success: true });
  } catch (e) {
    console.log(e)
    next(e);
  }
};

const deleteContentType = async (req, res, next) => {
  try {
    const { id } = req.params;
    await collectionService.deleteCollectionByContentType(id);
    const contentType = await contentService.deleteContentType(id);
    res.status(200).json({ message: "content type deleted", message: "content type deleted", contentType, success: true });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllContentTypes,
  getContentTypeById,
  createContentType,
  updateContentType,
  deleteContentType,
};
