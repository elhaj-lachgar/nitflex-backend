const { check } = require('express-validator');
const ValidatorMiddleware = require ('../../middleware/ValidatorMiddleware');



exports.AddToListValidator = [
    check('userId')
    .notEmpty()
    .withMessage('userId is required'),
    check('video')
    .notEmpty()
    .withMessage("video id is required"),
    ValidatorMiddleware
]

exports.DeleteFromListValidator = [
    check('userId')
    .notEmpty()
    .withMessage('userId is required'),
    check('id')
    .notEmpty()
    .withMessage("video id is required"),
    ValidatorMiddleware
]

exports.LikeValidator = [
    check('userId')
    .notEmpty()
    .withMessage('userId is required'),
    check('id')
    .notEmpty()
    .withMessage("video id is required"),
    ValidatorMiddleware
]