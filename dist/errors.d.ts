export declare class Blog2SocialError extends Error {
    readonly cause?: unknown;
    constructor(message: string, options?: {
        cause?: unknown;
    });
}
export declare class Blog2SocialApiError extends Blog2SocialError {
    readonly status: number;
    readonly responseBody: unknown;
    constructor(message: string, status: number, responseBody: unknown);
}
export declare class Blog2SocialValidationError extends Blog2SocialError {
    constructor(message: string);
}
//# sourceMappingURL=errors.d.ts.map