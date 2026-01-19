import { type Request } from "express";
import BaseValidator from "../../common/validator/baseValidator.validator";
import ValidationError from "../../models/errors/validationError.error";
import jwt from "jsonwebtoken";

class CreateProtocolValidator implements BaseValidator {
    check(req: Request): void {
        const token = (req.headers['authorization'] as string).split(' ')[1];
        const payload = jwt.decode(token) as { role?: string } | null;

        if (!payload || typeof payload !== 'object' || !payload.role) {
            throw new ValidationError(['Invalid token or role not found']);
        }

        const role: string = payload.role; 
        if (role !== 'admin') {
            throw new ValidationError(['Insufficient permissions to create protocol']);
        }
    }

}

export default CreateProtocolValidator;