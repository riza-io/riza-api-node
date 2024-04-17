// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-temp/riza-api/core';
import { APIResource } from '@stainless-temp/riza-api/resource';
import * as V1API from '@stainless-temp/riza-api/resources/v1';

export class V1 extends APIResource {
  execute(body: V1ExecuteParams, options?: Core.RequestOptions): Core.APIPromise<V1ExecuteResponse> {
    return this._client.post('/v1/execute', { body, ...options });
  }
}

export interface V1ExecuteResponse {
  exitCode?: string;

  stderr?: string;

  stdout?: string;
}

export interface V1ExecuteParams {
  args?: Array<string>;

  code?: string;

  env?: Record<string, string>;

  language?: 'UNSPECIFIED' | 'PYTHON' | 'JAVASCRIPT' | 'TYPESCRIPT' | 'RUBY' | 'PHP';

  stdin?: string;
}

export namespace V1 {
  export import V1ExecuteResponse = V1API.V1ExecuteResponse;
  export import V1ExecuteParams = V1API.V1ExecuteParams;
}
