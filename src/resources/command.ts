// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@riza-io/api/resource';
import * as Core from '@riza-io/api/core';
import * as CommandAPI from '@riza-io/api/resources/command';

export class Command extends APIResource {
  /**
   * Run a script in a secure, isolated sandbox. Scripts can read from stdin and
   * write to stdout or stderr. They can access environment variables and command
   * line arguments.
   */
  exec(body: CommandExecParams, options?: Core.RequestOptions): Core.APIPromise<CommandExecResponse> {
    return this._client.post('/v1/execute', { body, ...options });
  }
}

export interface CommandExecResponse {
  /**
   * The exit code returned by the script. Will be `0` on success and non-zero on
   * failure.
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
   * The code to execute in the sandbox.
   */
  code: string;

  /**
   * List of allowed hosts for HTTP requests
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
   * The interpreter to use when executing code.
   */
  language?: 'PYTHON' | 'JAVASCRIPT' | 'TYPESCRIPT' | 'RUBY' | 'PHP';

  /**
   * The runtime to use when executing code.
   */
  runtime?: string;

  /**
   * Input to pass to the script via `stdin`.
   */
  stdin?: string;
}

export namespace Command {
  export import CommandExecResponse = CommandAPI.CommandExecResponse;
  export import CommandExecParams = CommandAPI.CommandExecParams;
}
