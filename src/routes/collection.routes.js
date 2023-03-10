const collectionController = require('../controllers/collection.controller');
const { bodyValidation, schemas } = require('../middlewares/bodyValidation');

const collectionRouter = require('express').Router();

collectionRouter.get('/', collectionController.getCollectionByContentType);
collectionRouter.get('/:id', collectionController.getCollectionEntryById);
collectionRouter.post('/', bodyValidation(schemas.collection), collectionController.createCollectionEntry);
collectionRouter.put('/:id', bodyValidation(schemas.collection), collectionController.updateCollectionEntry);
collectionRouter.delete('/:id', collectionController.deleteCollectionEntry);

module.exports = collectionRouter;
