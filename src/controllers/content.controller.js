const contentService = require('../services/content.service');

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



module.exports = {
  getAllContentTypes,
  getContentTypeById,
  createContentType,
};
