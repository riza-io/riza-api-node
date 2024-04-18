// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@riza-io/api/core';
import { APIResource } from '@riza-io/api/resource';
import * as CodeAPI from '@riza-io/api/resources/code';

export class Code extends APIResource {
  execute(body: CodeExecuteParams, options?: Core.RequestOptions): Core.APIPromise<CodeExecuteResponse> {
    return this._client.post('/v1/execute', { body, ...options });
  }
}

export interface CodeExecuteResponse {
  exit_code?: number;

  stderr?: string;

  stdout?: string;
}

export interface CodeExecuteParams {
  args?: Array<string>;

  code?: string;

  env?: Record<string, string>;

  language?: 'UNSPECIFIED' | 'PYTHON' | 'JAVASCRIPT' | 'TYPESCRIPT' | 'RUBY' | 'PHP';

  stdin?: string;
}

export namespace Code {
  export import CodeExecuteResponse = CodeAPI.CodeExecuteResponse;
  export import CodeExecuteParams = CodeAPI.CodeExecuteParams;
}
