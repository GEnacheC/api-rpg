import { type Request } from "express";
import BaseValidator from "../../common/validator/baseValidator.validator";
import ValidationError from "../../models/errors/validationError.error";

class SigninUserValidator implements BaseValidator {
    check(req: Request): void {
        
        if(!req.body) {
            throw new ValidationError(['Request body is missing']);
        }

        const errors = []
        if (!req.body.username) errors.push('Username is required');
        if (!req.body.password) errors.push('Password is required');
        
        if (errors.length > 0) {
            throw new ValidationError(errors);
        }
    }

}

export default SigninUserValidator;