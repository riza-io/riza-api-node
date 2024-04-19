// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@riza-io/api/core';
import { APIResource } from '@riza-io/api/resource';
import * as SandboxAPI from '@riza-io/api/resources/sandbox';

export class Sandbox extends APIResource {
  /**
   * Run a script in a secure, isolated sandbox. Scripts can read from stdin and
   * write to stdout or stderr. They can access environment variables and command
   * line arguments.
   */
  execute(
    body: SandboxExecuteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SandboxExecuteResponse> {
    return this._client.post('/v1/execute', { body, ...options });
  }
}

export interface SandboxExecuteResponse {
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

export interface SandboxExecuteParams {
  /**
   * The code to execute in the sandbox.
   */
  code: string;

  /**
   * The interpreter to use when executing code.
   */
  language: 'PYTHON' | 'JAVASCRIPT' | 'TYPESCRIPT' | 'RUBY' | 'PHP';

  /**
   * List of command line arguments to pass to the script.
   */
  args?: Array<string>;

  /**
   * Set of key-value pairs to add to the script's execution environment.
   */
  env?: Record<string, string>;

  /**
   * Input to pass to the script via `stdin`.
   */
  stdin?: string;
}

export namespace Sandbox {
  export import SandboxExecuteResponse = SandboxAPI.SandboxExecuteResponse;
  export import SandboxExecuteParams = SandboxAPI.SandboxExecuteParams;
}
