// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { DefaultPagination, type DefaultPaginationParams } from '../pagination';

export class Executions extends APIResource {
  /**
   * Returns a list of executions in your project.
   */
  list(
    query?: ExecutionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExecutionsDefaultPagination, Execution>;
  list(options?: Core.RequestOptions): Core.PagePromise<ExecutionsDefaultPagination, Execution>;
  list(
    query: ExecutionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExecutionsDefaultPagination, Execution> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/executions', ExecutionsDefaultPagination, { query, ...options });
  }

  /**
   * Retrieves an execution.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<Execution> {
    return this._client.get(`/v1/executions/${id}`, options);
  }
}

export class ExecutionsDefaultPagination extends DefaultPagination<Execution> {}

export interface Execution {
  id: string;

  duration: number;

  exit_code: number;

  language: 'python' | 'javascript' | 'typescript' | 'ruby' | 'php';

  started_at: string;

  details?:
    | Execution.ToolExecutionDetails
    | Execution.FunctionExecutionDetails
    | Execution.ScriptExecutionDetails;
}

export namespace Execution {
  export interface ToolExecutionDetails {
    request: ToolExecutionDetails.Request;

    response: ToolExecutionDetails.Response;

    tool_id: string;

    type: 'tool';
  }

  export namespace ToolExecutionDetails {
    export interface Request {
      /**
       * Set of key-value pairs to add to the tool's execution environment.
       */
      env?: Array<Request.Env>;

      /**
       * Configuration for HTTP requests and authentication.
       */
      http?: Request.HTTP;

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

    export namespace Request {
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

    export interface Response {
      /**
       * The execution details of the function.
       */
      execution: Response.Execution;

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

    export namespace Response {
      /**
       * The execution details of the function.
       */
      export interface Execution {
        /**
         * The ID of the execution.
         */
        id: string;

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
  }

  export interface FunctionExecutionDetails {
    request: FunctionExecutionDetails.Request;

    response: FunctionExecutionDetails.Response;

    type: 'function';
  }

  export namespace FunctionExecutionDetails {
    export interface Request {
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
      env?: { [key: string]: string };

      /**
       * List of input files.
       */
      files?: Array<Request.File>;

      /**
       * Configuration for HTTP requests and authentication.
       */
      http?: Request.HTTP;

      /**
       * The input to the function. This must be a valid JSON-serializable object. If you
       * do not pass an input, your function will be called with None (Python) or null
       * (JavaScript/TypeScript) as the argument.
       */
      input?: unknown;

      /**
       * Configuration for execution environment limits.
       */
      limits?: Request.Limits;

      /**
       * The ID of the runtime revision to use when executing code.
       */
      runtime_revision_id?: string;
    }

    export namespace Request {
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

    export interface Response {
      /**
       * The execution details of the function.
       */
      execution: Response.Execution;

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

    export namespace Response {
      /**
       * The execution details of the function.
       */
      export interface Execution {
        /**
         * The ID of the execution.
         */
        id: string;

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
  }

  export interface ScriptExecutionDetails {
    request: ScriptExecutionDetails.Request;

    response: ScriptExecutionDetails.Response;

    type: 'script';
  }

  export namespace ScriptExecutionDetails {
    export interface Request {
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
      env?: { [key: string]: string };

      /**
       * List of input files.
       */
      files?: Array<Request.File>;

      /**
       * Configuration for HTTP requests and authentication.
       */
      http?: Request.HTTP;

      /**
       * Configuration for execution environment limits.
       */
      limits?: Request.Limits;

      /**
       * The ID of the runtime revision to use when executing code.
       */
      runtime_revision_id?: string;

      /**
       * Input made available to the script via 'stdin'.
       */
      stdin?: string;
    }

    export namespace Request {
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

    export interface Response {
      /**
       * The ID of the execution.
       */
      id: string;

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
  }
}

export interface ExecutionListParams extends DefaultPaginationParams {
  /**
   * If true, only show executions where the exit code is not 0, indicating an
   * execution error. Defaults to false.
   */
  only_non_zero_exit_codes?: boolean;
}

Executions.ExecutionsDefaultPagination = ExecutionsDefaultPagination;

export declare namespace Executions {
  export {
    type Execution as Execution,
    ExecutionsDefaultPagination as ExecutionsDefaultPagination,
    type ExecutionListParams as ExecutionListParams,
  };
}
