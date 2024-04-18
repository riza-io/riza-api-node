// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@riza-io/api/core';
import { APIResource } from '@riza-io/api/resource';
import * as SandboxAPI from '@riza-io/api/resources/sandbox';

export class Sandbox extends APIResource {
  execute(
    body: SandboxExecuteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SandboxExecuteResponse> {
    return this._client.post('/v1/execute', { body, ...options });
  }
}

export interface SandboxExecuteResponse {
  exit_code?: number;

  stderr?: string;

  stdout?: string;
}

export interface SandboxExecuteParams {
  args?: Array<string>;

  code?: string;

  env?: Record<string, string>;

  language?: 'UNSPECIFIED' | 'PYTHON' | 'JAVASCRIPT' | 'TYPESCRIPT' | 'RUBY' | 'PHP';

  stdin?: string;
}

export namespace Sandbox {
  export import SandboxExecuteResponse = SandboxAPI.SandboxExecuteResponse;
  export import SandboxExecuteParams = SandboxAPI.SandboxExecuteParams;
}
