const { check } = require('express-validator');


module.exports = {

    requireFirstInput: check('firstInput')
        .trim()
        .isLength({min:1, max:10})
        .withMessage()
        .toFloat()
        .isFloat()
        .withMessage('Must be a digit'),
    
    requireSecondInput: check('secondInput')
        .trim()
        .isLength({ min: 1, max: 10 })
        .withMessage()
        .toFloat()
        .isFloat()
        .withMessage('Must be a digit'),

    requireDevisionSecondInput: check('secondInput')
        .trim()
        .isLength({ min: 1, max: 10 })
        .withMessage()
        .toFloat()
        .isFloat()
        .withMessage('Must be a digit')
        .custom((value) => {
            if (value === 0){
                throw new Error('Second value cannot be 0');
            }
        })
};