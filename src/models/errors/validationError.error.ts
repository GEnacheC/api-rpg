class ValidationError extends Error {
    public errors: string[];
    constructor(errors: string[]) {
        super("Validation Error");
        this.errors = errors;
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

export default ValidationError;