const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { classService } = require('../services');

const createClass = catchAsync(async (req, res) => {
  const user = await classService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getClass = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await classService.queryclass(filter, options);
  res.send(result);
});

const getClass = catchAsync(async (req, res) => {
  conclass = await classService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateClass = catchAsync(async (req, res) => {
  const user = await classService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

const deleteClass = catchAsync(async (req, res) => {
  await classService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createClass,
  getClass,
  getClass,
  updateClass,
  deleteClass,
}
