import { type Request } from "express";
import BaseValidator from "../../common/validator/baseValidator.validator";
import ValidationError from "../../models/errors/validationError.error";

class CreateAttributeValidator implements BaseValidator {
    check(req: Request): void {
        
        if(!req.body) {
            throw new ValidationError(['Request body is missing']);
        }

        const errors: string[] = [];
        
        if (!req.body.name) errors.push('Name is required');
        if (!req.body.description) errors.push('Description is required');
        
        if (errors.length > 0) {
            throw new ValidationError(errors);
        }
    }

}

export default CreateAttributeValidator;