const { validationResult } = require("express-validator");


function ValidatorMiddleware ( req , res , next ){
    const errors  =  validationResult (req);
    if (!errors.isEmpty())
      return res.status(400).json(errors.array());

    next();
}


module.exports = ValidatorMiddleware