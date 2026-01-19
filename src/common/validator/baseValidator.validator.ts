import { type Request } from "express";

interface BaseValidator {
    check(req: Request): void;
}

export default BaseValidator;