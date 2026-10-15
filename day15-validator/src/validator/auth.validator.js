import {body, validationResult} from 'express-validator'

export const registerValidation = [
    body("email")
        .exists().withMessage("emial is equired")
        .isEmail().withMessage("Invalid emial address"),
    body("phone")
        .exists().withMessage("phone is required")
        .isMobilePhone("en-IN").withMessage("Invalid phone number"),
    body("password")
        .exists().withMessage("password is required")
        .trim().isLength({min: 6}).withMessage("pssword at least 6 characters long"),
    
    (req, res, next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({
                message: "Invalid message",
                errors: errors.array()
            })
        }

        next()
    }
]