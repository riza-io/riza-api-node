// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
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
  list(options?: Core.RequestOptions): Core.APIPromise<ToolListResponse> {
    return this._client.get('/v1/tools', options);
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
  id: string;

  code: string;

  description: string;

  input_schema: unknown;

  language: 'PYTHON' | 'JAVASCRIPT' | 'TYPESCRIPT';

  name: string;

  revision_id: string;
}

export interface ToolListResponse {
  tools: Array<Tool>;
}

export interface ToolExecResponse {
  execution: ToolExecResponse.Execution;

  output?: unknown;
}

export namespace ToolExecResponse {
  export interface Execution {
    exit_code: number;

    stderr: string;

    stdout: string;
  }
}

export interface ToolCreateParams {
  code: string;

  name: string;

  description?: string;

  input_schema?: unknown;

  language?: 'PYTHON' | 'JAVASCRIPT' | 'TYPESCRIPT';
}

export interface ToolUpdateParams {
  code?: string | null;

  description?: string | null;

  input_schema?: unknown | null;

  language?: 'PYTHON' | 'JAVASCRIPT' | 'TYPESCRIPT';

  name?: string | null;
}

export interface ToolExecParams {
  env?: Array<ToolExecParams.Env>;

  http?: ToolExecParams.HTTP | null;

  input?: unknown;

  revision_id?: string;
}

export namespace ToolExecParams {
  export interface Env {
    name: string;

    secret_id?: string;

    value?: string;
  }

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
        basic?: Auth.Basic | null;

        /**
         * Configuration to add an 'Authorization' header using the 'Bearer' scheme.
         */
        bearer?: Auth.Bearer | null;

        query?: Auth.Query | null;
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
    type ToolExecParams as ToolExecParams,
  };
}
