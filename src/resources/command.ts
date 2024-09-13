// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as CommandAPI from './command';

export class Command extends APIResource {
  /**
   * Run a script in a secure, isolated environment. Scripts can read from `stdin`
   * and write to `stdout` or `stderr`. They can access input files, environment
   * variables and command line arguments.
   */
  exec(body: CommandExecParams, options?: Core.RequestOptions): Core.APIPromise<CommandExecResponse> {
    return this._client.post('/v1/execute', { body, ...options });
  }
}

export interface CommandExecResponse {
  /**
   * The exit code returned by the script. Will often be `0` on success and non-zero
   * on failure.
   */
  exit_code?: number;

  /**
   * The contents of `stderr` after executing the script.
   */
  stderr?: string;

  /**
   * The contents of `stdout` after executing the script.
   */
  stdout?: string;
}

export interface CommandExecParams {
  /**
   * The code to execute.
   */
  code: string;

  /**
   * List of allowed hosts for HTTP requests.
   */
  allow_http_hosts?: Array<string>;

  /**
   * List of command line arguments to pass to the script.
   */
  args?: Array<string>;

  /**
   * Set of key-value pairs to add to the script's execution environment.
   */
  env?: Record<string, string>;

  /**
   * List of input files.
   */
  files?: Array<CommandExecParams.File>;

  /**
   * Configuration for HTTP requests and authentication.
   */
  http?: CommandExecParams.HTTP;

  /**
   * The interpreter to use when executing code.
   */
  language?: 'PYTHON' | 'JAVASCRIPT' | 'TYPESCRIPT' | 'RUBY' | 'PHP';

  /**
   * Configuration for execution environment limits.
   */
  limits?: CommandExecParams.Limits;

  /**
   * The runtime to use when executing code.
   */
  runtime?: string;

  /**
   * Input made available to the script via `stdin`.
   */
  stdin?: string;
}

export namespace CommandExecParams {
  export interface File {
    /**
     * The contents of the file.
     */
    content?: string;

    /**
     * The relative path of the file.
     */
    path?: string;
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
        /**
         * Configuration to add an `Authorization` header using the `Bearer` scheme.
         */
        bearer?: Auth.Bearer;
      }

      export namespace Auth {
        /**
         * Configuration to add an `Authorization` header using the `Bearer` scheme.
         */
        export interface Bearer {
          /**
           * The token to set, e.g. `Authorization: Bearer <token>`.
           */
          token?: string;
        }
      }
    }
  }

  /**
   * Configuration for execution environment limits.
   */
  export interface Limits {
    /**
     * The maximum time allowed for execution (in seconds). Default is 30.
     */
    execution_timeout?: number;

    /**
     * The maximum memory allowed for execution (in MiB). Default is 128.
     */
    memory_size?: number;
  }
}

export namespace Command {
  export import CommandExecResponse = CommandAPI.CommandExecResponse;
  export import CommandExecParams = CommandAPI.CommandExecParams;
}
