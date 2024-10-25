// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ToolsAPI from './tools';

export class Tools extends APIResource {
  create(body: ToolCreateParams, options?: Core.RequestOptions): Core.APIPromise<Tool> {
    return this._client.post('/v1/tools', { body, ...options });
  }

  update(id: string, body: ToolUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Tool> {
    return this._client.post(`/v1/tools/${id}`, { body, ...options });
  }

  list(options?: Core.RequestOptions): Core.APIPromise<ToolListResponse> {
    return this._client.get('/v1/tools', options);
  }

  exec(id: string, body: ToolExecParams, options?: Core.RequestOptions): Core.APIPromise<ToolExecResponse> {
    return this._client.post(`/v1/tools/${id}/execute`, { body, ...options });
  }

  get(id: string, options?: Core.RequestOptions): Core.APIPromise<Tool> {
    return this._client.get(`/v1/tools/${id}`, options);
  }
}

export interface Tool {
  id: string;

  code: string;

  description: string;

  input_schema: unknown;

  name: string;

  revision_id: string;
}

export interface ToolListResponse {
  tools?: Array<Tool>;
}

export interface ToolExecResponse {
  execution: ToolExecResponse.Execution;

  output?: string;
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

  language?: 'PYTHON' | 'JAVASCRIPT' | 'TYPESCRIPT' | 'RUBY' | 'PHP';
}

export interface ToolUpdateParams {
  code?: string | null;

  description?: string | null;

  input_schema?: unknown | null;

  language?: 'PYTHON' | 'JAVASCRIPT' | 'TYPESCRIPT' | 'RUBY' | 'PHP';

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
      }
    }
  }
}

export namespace Tools {
  export import Tool = ToolsAPI.Tool;
  export import ToolListResponse = ToolsAPI.ToolListResponse;
  export import ToolExecResponse = ToolsAPI.ToolExecResponse;
  export import ToolCreateParams = ToolsAPI.ToolCreateParams;
  export import ToolUpdateParams = ToolsAPI.ToolUpdateParams;
  export import ToolExecParams = ToolsAPI.ToolExecParams;
}
