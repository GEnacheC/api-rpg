import { type Response } from "express";

class BaseController {
    constructor() {}

    private successObject = { message: "Operation successful" };
    private successObjectWithData = (data: any) => ({ message: "Operation successful", data });

    public static ReturnError(res: Response, errors: string[]): Response<any, Record<string, any>> {
        return res.status(400).json({ message: "One or more errors occurred", errors });
    }

    protected ReturnSuccess<T>(res: Response, data: T): Response<any, Record<string, any>> {
        return res.status(200).json(this.successObjectWithData(data));
    }

    protected ReturnSuccessWithoutData(res: Response): Response<any, Record<string, any>> {
        return res.status(200).json(this.successObject);
    }

    protected ReturnCreated<T>(res: Response, data: T): Response<any, Record<string, any>> {
        return res.status(201).json(this.successObjectWithData(data));
    }

    protected ReturnCreatedWithoutData(res: Response): Response<any, Record<string, any>> {
        return res.status(201).json(this.successObject);
    }

    protected ReturnUnauthorized(res: Response): Response<any, Record<string, any>> {
        return res.status(401).json({ message: "Unauthorized" });
    }

    protected ReturnSuccessToken(res: Response, token: string): Response<any, Record<string, any>> {
        return res.status(200).json({ token: token });
    }
}

export default BaseController;