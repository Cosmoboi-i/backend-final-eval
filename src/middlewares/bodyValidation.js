const joi = require('joi');

const schemas = {
  contentType: joi.object().keys({
    name: joi.string().required(),
    structure: joi.object().required(),
  }),
  collection: joi.object().keys({
    content_type_id: joi.number().required(),
    content: joi.object().required(),
  }),
}

const bodyValidation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: "Bad Input", error: error.details[0].message });
    }
    next();
  };
}

module.exports = { bodyValidation, schemas };
