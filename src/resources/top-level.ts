// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@riza-io/api/core';
import { APIResource } from '@riza-io/api/resource';
import * as TopLevelAPI from '@riza-io/api/resources/top-level';

export class TopLevel extends APIResource {
  execute(
    body: TopLevelExecuteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLevelExecuteResponse> {
    return this._client.post('/v1/execute', { body, ...options });
  }
}

export interface TopLevelExecuteResponse {
  exitCode?: string;

  stderr?: string;

  stdout?: string;
}

export interface TopLevelExecuteParams {
  args?: Array<string>;

  code?: string;

  env?: Record<string, string>;

  language?: 'UNSPECIFIED' | 'PYTHON' | 'JAVASCRIPT' | 'TYPESCRIPT' | 'RUBY' | 'PHP';

  stdin?: string;
}

export namespace TopLevel {
  export import TopLevelExecuteResponse = TopLevelAPI.TopLevelExecuteResponse;
  export import TopLevelExecuteParams = TopLevelAPI.TopLevelExecuteParams;
}
