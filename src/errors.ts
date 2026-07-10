export class Blog2SocialError extends Error {
  public readonly cause?: unknown;

  public constructor(message: string, options?: { cause?: unknown }) {
    super(message);
    this.name = 'Blog2SocialError';
    this.cause = options?.cause;
  }
}

export class Blog2SocialApiError extends Blog2SocialError {
  public readonly status: number;
  public readonly responseBody: unknown;

  public constructor(message: string, status: number, responseBody: unknown) {
    super(message);
    this.name = 'Blog2SocialApiError';
    this.status = status;
    this.responseBody = responseBody;
  }
}

export class Blog2SocialValidationError extends Blog2SocialError {
  public constructor(message: string) {
    super(message);
    this.name = 'Blog2SocialValidationError';
  }
}
