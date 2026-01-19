import { type Request } from "express";
import BaseValidator from "../../common/validator/baseValidator.validator";
import ValidationError from "../../models/errors/validationError.error";

class UpdateCharacterAttributesValidator implements BaseValidator {
    check(req: Request): void {
        
        if(!req.body) {
            throw new ValidationError(['Request body is missing']);
        }
        
        const characterId = req.params.id as string;
        if (!characterId) {
            throw new ValidationError(['Character ID is required']);
        }

        const bodyIsValid = req.body.every((item: any) => {
            if (item.idAttribute && typeof item.idAttribute === 'string' &&
                item.value !== undefined && typeof item.value === 'number') {
                return true;
            }
            return false;
        });

        if (!bodyIsValid) {
            throw new ValidationError(['Invalid request body format']);
        }
    }

}

export default UpdateCharacterAttributesValidator;