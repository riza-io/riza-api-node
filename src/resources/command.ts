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

  /**
   * Run a function in a secure, isolated environment. Define a function named
   * `execute`. The function will be passed `input` as an object.
   */
  execFunc(
    body: CommandExecFuncParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommandExecFuncResponse> {
    return this._client.post('/v1/execute-function', { body, ...options });
  }
}

export interface CommandExecResponse {
  /**
   * The execution time of the script in milliseconds.
   */
  duration: number;

  /**
   * The exit code returned by the script. Will often be '0' on success and non-zero
   * on failure.
   */
  exit_code: number;

  /**
   * The contents of 'stderr' after executing the script.
   */
  stderr: string;

  /**
   * The contents of 'stdout' after executing the script.
   */
  stdout: string;
}

export interface CommandExecFuncResponse {
  /**
   * The execution details of the function.
   */
  execution: CommandExecFuncResponse.Execution;

  /**
   * The output of the function.
   */
  output: unknown;

  /**
   * The status of the output. "valid" means your function executed successfully and
   * returned a valid JSON-serializable object, or void. "json_serialization_error"
   * means your function executed successfully, but returned a nonserializable
   * object. "error" means your function failed to execute.
   */
  output_status: 'error' | 'json_serialization_error' | 'valid';
}

export namespace CommandExecFuncResponse {
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

export interface CommandExecParams {
  /**
   * The code to execute.
   */
  code: string;

  /**
   * The interpreter to use when executing code.
   */
  language: 'python' | 'javascript' | 'typescript' | 'ruby' | 'php';

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
   * Configuration for execution environment limits.
   */
  limits?: CommandExecParams.Limits;

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
        basic?: Auth.Basic;

        /**
         * Configuration to add an 'Authorization' header using the 'Bearer' scheme.
         */
        bearer?: Auth.Bearer;

        header?: Auth.Header;

        query?: Auth.Query;
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

export interface CommandExecFuncParams {
  /**
   * The function to execute. Your code must define a function named "execute" that
   * takes in a single argument and returns a JSON-serializable value.
   */
  code: string;

  /**
   * The interpreter to use when executing code.
   */
  language: 'python' | 'javascript' | 'typescript';

  /**
   * Set of key-value pairs to add to the function's execution environment.
   */
  env?: Record<string, string>;

  /**
   * List of input files.
   */
  files?: Array<CommandExecFuncParams.File>;

  /**
   * Configuration for HTTP requests and authentication.
   */
  http?: CommandExecFuncParams.HTTP;

  /**
   * The input to the function. This must be a valid JSON-serializable object. If you
   * do not pass an input, your function will be called with None (Python) or null
   * (JavaScript/TypeScript) as the argument.
   */
  input?: unknown;

  /**
   * Configuration for execution environment limits.
   */
  limits?: CommandExecFuncParams.Limits;

  /**
   * The ID of the runtime revision to use when executing code.
   */
  runtime_revision_id?: string;
}

export namespace CommandExecFuncParams {
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
        basic?: Auth.Basic;

        /**
         * Configuration to add an 'Authorization' header using the 'Bearer' scheme.
         */
        bearer?: Auth.Bearer;

        header?: Auth.Header;

        query?: Auth.Query;
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
  export {
    type CommandExecResponse as CommandExecResponse,
    type CommandExecFuncResponse as CommandExecFuncResponse,
    type CommandExecParams as CommandExecParams,
    type CommandExecFuncParams as CommandExecFuncParams,
  };
}
