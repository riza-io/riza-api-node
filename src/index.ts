// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import {
  type RuntimesPaginationParams,
  RuntimesPaginationResponse,
  type SecretsPaginationParams,
  SecretsPaginationResponse,
  type ToolsPaginationParams,
  ToolsPaginationResponse,
} from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  Command,
  CommandExecFuncParams,
  CommandExecFuncResponse,
  CommandExecParams,
  CommandExecResponse,
} from './resources/command';
import {
  Secret,
  SecretCreateParams,
  SecretListParams,
  Secrets,
  SecretsSecretsPagination,
} from './resources/secrets';
import {
  Tool,
  ToolCreateParams,
  ToolExecParams,
  ToolExecResponse,
  ToolListParams,
  ToolUpdateParams,
  Tools,
  ToolsToolsPagination,
} from './resources/tools';
import {
  Runtime,
  RuntimeCreateParams,
  RuntimeListParams,
  Runtimes,
  RuntimesRuntimesPagination,
} from './resources/runtimes/runtimes';

export interface ClientOptions {
  /**
   * Defaults to process.env['RIZA_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['RIZA_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Riza API.
 */
export class Riza extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Riza API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['RIZA_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['RIZA_BASE_URL'] ?? https://api.riza.io] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('RIZA_BASE_URL'),
    apiKey = Core.readEnv('RIZA_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.RizaError(
        "The RIZA_API_KEY environment variable is missing or empty; either provide it, or instantiate the Riza client with an apiKey option, like new Riza({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.riza.io`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  secrets: API.Secrets = new API.Secrets(this);
  tools: API.Tools = new API.Tools(this);
  command: API.Command = new API.Command(this);
  runtimes: API.Runtimes = new API.Runtimes(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  static Riza = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static RizaError = Errors.RizaError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Riza.Secrets = Secrets;
Riza.SecretsSecretsPagination = SecretsSecretsPagination;
Riza.Tools = Tools;
Riza.ToolsToolsPagination = ToolsToolsPagination;
Riza.Command = Command;
Riza.Runtimes = Runtimes;
Riza.RuntimesRuntimesPagination = RuntimesRuntimesPagination;
export declare namespace Riza {
  export type RequestOptions = Core.RequestOptions;

  export import RuntimesPagination = Pagination.RuntimesPagination;
  export {
    type RuntimesPaginationParams as RuntimesPaginationParams,
    type RuntimesPaginationResponse as RuntimesPaginationResponse,
  };

  export import ToolsPagination = Pagination.ToolsPagination;
  export {
    type ToolsPaginationParams as ToolsPaginationParams,
    type ToolsPaginationResponse as ToolsPaginationResponse,
  };

  export import SecretsPagination = Pagination.SecretsPagination;
  export {
    type SecretsPaginationParams as SecretsPaginationParams,
    type SecretsPaginationResponse as SecretsPaginationResponse,
  };

  export {
    Secrets as Secrets,
    type Secret as Secret,
    SecretsSecretsPagination as SecretsSecretsPagination,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
  };

  export {
    Tools as Tools,
    type Tool as Tool,
    type ToolExecResponse as ToolExecResponse,
    ToolsToolsPagination as ToolsToolsPagination,
    type ToolCreateParams as ToolCreateParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
    type ToolExecParams as ToolExecParams,
  };

  export {
    Command as Command,
    type CommandExecResponse as CommandExecResponse,
    type CommandExecFuncResponse as CommandExecFuncResponse,
    type CommandExecParams as CommandExecParams,
    type CommandExecFuncParams as CommandExecFuncParams,
  };

  export {
    Runtimes as Runtimes,
    type Runtime as Runtime,
    RuntimesRuntimesPagination as RuntimesRuntimesPagination,
    type RuntimeCreateParams as RuntimeCreateParams,
    type RuntimeListParams as RuntimeListParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  RizaError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Riza;
