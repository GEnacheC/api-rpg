import { type Request } from "express";
import BaseValidator from "../../common/validator/baseValidator.validator";
import ValidationError from "../../models/errors/validationError.error";

class CreateCharacterValidator implements BaseValidator {
    check(req: Request): void {
        
        if(!req.body) {
            throw new ValidationError(['Request body is missing']);
        }

        const userId = (req as any).user.userId;
        const errors: string[] = [];
        
        if (!req.body.name) errors.push('Name is required');
        if (!req.body.surname) errors.push('Surname is required');
        if (!req.body.background) errors.push('Background is required');
        if (!userId) errors.push('User ID is required');
        if (!req.body.campaignId) errors.push('Campaign ID is required');
        
        if (errors.length > 0) {
            throw new ValidationError(errors);
        }
    }

}

export default CreateCharacterValidator;