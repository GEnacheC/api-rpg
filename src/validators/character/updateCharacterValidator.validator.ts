import { type Request } from "express";
import BaseValidator from "../../common/validator/baseValidator.validator";
import ValidationError from "../../models/errors/validationError.error";

class UpdateCharacterValidator implements BaseValidator {
    check(req: Request): void {
        
        if(!req.body) {
            throw new ValidationError(['Request body is missing']);
        }
        
        const characterId = req.params.id as string;
        if (!characterId) {
            throw new ValidationError(['Character ID is required']);
        }
        if (!req.body) {
            throw new ValidationError(['Request body is missing']);
        }

        const { name, surname, background } = req.body;

        if (!name && !surname && !background) {
            throw new ValidationError(['No valid fields to update']);
        }
    }

}

export default UpdateCharacterValidator;