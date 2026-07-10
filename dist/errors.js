export class Blog2SocialError extends Error {
    cause;
    constructor(message, options) {
        super(message);
        this.name = 'Blog2SocialError';
        this.cause = options?.cause;
    }
}
export class Blog2SocialApiError extends Blog2SocialError {
    status;
    responseBody;
    constructor(message, status, responseBody) {
        super(message);
        this.name = 'Blog2SocialApiError';
        this.status = status;
        this.responseBody = responseBody;
    }
}
export class Blog2SocialValidationError extends Blog2SocialError {
    constructor(message) {
        super(message);
        this.name = 'Blog2SocialValidationError';
    }
}
//# sourceMappingURL=errors.js.map