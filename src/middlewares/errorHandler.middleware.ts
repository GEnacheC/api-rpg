import { type Request, type Response, type NextFunction } from "express";
import BaseController from "../common/controller/baseController.controller";
import ValidationError from "../models/errors/validationError.error";


function ErrorHandlerMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {    
    if(err instanceof ValidationError) {
        return BaseController.ReturnError(res, err.errors);
    }
    
    return BaseController.ReturnError(res, [err instanceof Error ? err.message : "Unknown error"]);
}

export default ErrorHandlerMiddleware;