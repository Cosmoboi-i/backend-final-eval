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

module.exports = {
  getAllContentTypes,

};