const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createClass = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    numberStudent: Joi.number().integer().required(),
  }),
};

const getClass = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getClass = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateClass = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      numberStudent: Joi.number().integer(),
    })
    .min(1),
};

const deleteClass = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createClass,
  getClass,
  getClass,
  updateClass,
  deleteClass,
};
