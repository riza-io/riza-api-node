// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

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
   * The exit code returned by the script. Will often be '0' on success and non-zero
   * on failure.
   */
  exit_code?: number;

  /**
   * The contents of 'stderr' after executing the script.
   */
  stderr?: string;

  /**
   * The contents of 'stdout' after executing the script.
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
  http?: CommandExecParams.HTTP | null;

  /**
   * The interpreter to use when executing code.
   */
  language?: 'python' | 'javascript' | 'typescript' | 'ruby' | 'php';

  /**
   * Configuration for execution environment limits.
   */
  limits?: CommandExecParams.Limits | null;

  /**
   * The ID of the runtime revision to use when executing code.
   */
  runtime_revision_id?: string;

  /**
   * Input made available to the script via 'stdin'.
   */
  stdin?: string;
}

export namespace CommandExecParams {
  export interface File {
    /**
     * The contents of the file.
     */
    contents?: string;

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

        header?: Auth.Header | null;

        query?: Auth.Query | null;
      }

      export namespace Auth {
        export interface Basic {
          password?: string;

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
        }

        export interface Header {
          name?: string;

          value?: string;
        }

        export interface Query {
          key?: string;

          value?: string;
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

export declare namespace Command {
  export { type CommandExecResponse as CommandExecResponse, type CommandExecParams as CommandExecParams };
}
