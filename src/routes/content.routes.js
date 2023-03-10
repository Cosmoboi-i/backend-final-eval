const contentController = require('../controllers/content.controller');
const { schemas, bodyValidation } = require('../middlewares/bodyValidation');

const contentRouter = require('express').Router();

contentRouter.get('/', contentController.getAllContentTypes);
contentRouter.get('/:id', contentController.getContentTypeById);
contentRouter.post('/', bodyValidation(schemas.contentType), contentController.createContentType);
contentRouter.put('/:id', bodyValidation(schemas.contentType), contentController.updateContentType);
contentRouter.delete('/:id', contentController.deleteContentType);

module.exports = contentRouter;