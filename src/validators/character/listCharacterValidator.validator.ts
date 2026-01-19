import { Request } from "express";
import BaseValidator from "../../common/validator/baseValidator.validator";
import ValidationError from "../../models/errors/validationError.error";

class ListCharacterValidator implements BaseValidator {
    check(req: Request): void {
        const queryParams = {
            page: Number(req.query.page ?? 1),
            limit: Number(req.query.limit ?? 10),
            search: req.query.search as string | undefined,
        }

        if (queryParams.page <= 0 || queryParams.limit <= 0) {
            throw new ValidationError(['Parametros de paginação inválidos']);
        }
    }
}

export default ListCharacterValidator;