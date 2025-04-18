// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Tools extends APIResource {
  /**
   * Create a tool in your project.
   */
  create(body: ToolCreateParams, options?: Core.RequestOptions): Core.APIPromise<Tool> {
    return this._client.post('/v1/tools', { body, ...options });
  }

  /**
   * Update the source code and input schema of a tool.
   */
  update(id: string, body: ToolUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Tool> {
    return this._client.post(`/v1/tools/${id}`, { body, ...options });
  }

  /**
   * Returns a list of tools in your project.
   */
  list(query?: ToolListParams, options?: Core.RequestOptions): Core.APIPromise<ToolListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ToolListResponse>;
  list(
    query: ToolListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/tools', { query, ...options });
  }

  /**
   * Execute a tool with a given input. The input is validated against the tool's
   * input schema.
   */
  exec(id: string, body: ToolExecParams, options?: Core.RequestOptions): Core.APIPromise<ToolExecResponse> {
    return this._client.post(`/v1/tools/${id}/execute`, { body, ...options });
  }

  /**
   * Retrieves a tool.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<Tool> {
    return this._client.get(`/v1/tools/${id}`, options);
  }
}

export interface Tool {
  /**
   * The ID of the tool.
   */
  id: string;

  /**
   * The code of the tool. You must define a function named "execute" that takes in a
   * single argument and returns a JSON-serializable value. The argument will be the
   * "input" passed when executing the tool, and will match the input schema.
   */
  code: string;

  /**
   * A description of the tool.
   */
  description: string;

  /**
   * The input schema of the tool. This must be a valid JSON Schema object.
   */
  input_schema: unknown;

  /**
   * The language of the tool's code.
   */
  language: 'python' | 'javascript' | 'typescript';

  /**
   * The name of the tool.
   */
  name: string;

  /**
   * The ID of the tool's current revision. This is used to pin executions to a
   * specific version of the tool, even if the tool is updated later.
   */
  revision_id: string;

  /**
   * The ID of the custom runtime revision that the tool uses for executions. This
   * pins executions to specific version of a custom runtime runtime, even if the
   * runtime is updated later.
   */
  runtime_revision_id?: string;
}

export interface ToolListResponse {
  tools: Array<Tool>;
}

export interface ToolExecResponse {
  /**
   * The execution details of the function.
   */
  execution: ToolExecResponse.Execution;

  /**
   * The returned value of the Tool's execute function.
   */
  output: unknown;

  /**
   * The status of the output. "valid" means your Tool executed successfully and
   * returned a valid JSON-serializable object, or void. "json_serialization_error"
   * means your Tool executed successfully, but returned a nonserializable object.
   * "error" means your Tool failed to execute.
   */
  output_status: 'error' | 'json_serialization_error' | 'valid';
}

export namespace ToolExecResponse {
  /**
   * The execution details of the function.
   */
  export interface Execution {
    /**
     * The execution time of the function in milliseconds.
     */
    duration: number;

    /**
     * The exit code returned by the function. Will often be '0' on success and
     * non-zero on failure.
     */
    exit_code: number;

    /**
     * The contents of 'stderr' after executing the function.
     */
    stderr: string;

    /**
     * The contents of 'stdout' after executing the function.
     */
    stdout: string;
  }
}

export interface ToolCreateParams {
  /**
   * The code of the tool. You must define a function named "execute" that takes in a
   * single argument and returns a JSON-serializable value. The argument will be the
   * "input" passed when executing the tool, and will match the input schema.
   */
  code: string;

  /**
   * The language of the tool's code.
   */
  language: 'python' | 'javascript' | 'typescript';

  /**
   * The name of the tool.
   */
  name: string;

  /**
   * A description of the tool.
   */
  description?: string;

  /**
   * The input schema of the tool. This must be a valid JSON Schema object.
   */
  input_schema?: unknown;

  /**
   * The ID of the runtime revision to use when executing the tool.
   */
  runtime_revision_id?: string;
}

export interface ToolUpdateParams {
  /**
   * The code of the tool. You must define a function named "execute" that takes in a
   * single argument and returns a JSON-serializable value. The argument will be the
   * "input" passed when executing the tool, and will match the input schema.
   */
  code?: string;

  /**
   * A description of the tool.
   */
  description?: string;

  /**
   * The input schema of the tool. This must be a valid JSON Schema object.
   */
  input_schema?: unknown;

  /**
   * The language of the tool's code.
   */
  language?: 'python' | 'javascript' | 'typescript';

  /**
   * The name of the tool.
   */
  name?: string;

  /**
   * The ID of the custom runtime revision that the tool uses for executions. This is
   * used to pin executions to a specific version of a custom runtime, even if the
   * runtime is updated later.
   */
  runtime_revision_id?: string;
}

export interface ToolListParams {
  /**
   * The number of items to return. Defaults to 100. Maximum is 100.
   */
  limit?: number;

  /**
   * The ID of the item to start after. To get the next page of results, set this to
   * the ID of the last item in the current page.
   */
  starting_after?: string;
}

export interface ToolExecParams {
  /**
   * Set of key-value pairs to add to the tool's execution environment.
   */
  env?: Array<ToolExecParams.Env>;

  /**
   * Configuration for HTTP requests and authentication.
   */
  http?: ToolExecParams.HTTP;

  /**
   * The input to the tool. This must be a valid JSON-serializable object. It will be
   * validated against the tool's input schema.
   */
  input?: unknown;

  /**
   * The Tool revision ID to execute. This optional parmeter is used to pin
   * executions to specific versions of the Tool. If not provided, the latest
   * (current) version of the Tool will be executed.
   */
  revision_id?: string;
}

export namespace ToolExecParams {
  /**
   * Set of key-value pairs to add to the tool's execution environment.
   */
  export interface Env {
    name: string;

    secret_id?: string;

    value?: string;
  }

  /**
   * Configuration for HTTP requests and authentication.
   */
  export interface HTTP {
    /**
     * List of allowed HTTP hosts and associated authentication.
     */
    allow?: Array<HTTP.Allow>;
  }

  export namespace HTTP {
    /**
     * List of allowed HTTP hosts and associated authentication.
     */
    export interface Allow {
      /**
       * Authentication configuration for outbound requests to this host.
       */
      auth?: Allow.Auth;

      /**
       * The hostname to allow.
       */
      host?: string;
    }

    export namespace Allow {
      /**
       * Authentication configuration for outbound requests to this host.
       */
      export interface Auth {
        basic?: Auth.Basic;

        /**
         * Configuration to add an 'Authorization' header using the 'Bearer' scheme.
         */
        bearer?: Auth.Bearer;

        query?: Auth.Query;
      }

      export namespace Auth {
        export interface Basic {
          password?: string;

          secret_id?: string;

          user_id?: string;
        }

        /**
         * Configuration to add an 'Authorization' header using the 'Bearer' scheme.
         */
        export interface Bearer {
          /**
           * The token to set, e.g. 'Authorization: Bearer <token>'.
           */
          token?: string;

          secret_id?: string;
        }

        export interface Query {
          key?: string;

          secret_id?: string;

          value?: string;
        }
      }
    }
  }
}

export declare namespace Tools {
  export {
    type Tool as Tool,
    type ToolListResponse as ToolListResponse,
    type ToolExecResponse as ToolExecResponse,
    type ToolCreateParams as ToolCreateParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
    type ToolExecParams as ToolExecParams,
  };
}
