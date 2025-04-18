// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as RevisionsAPI from './revisions';
import { Revision, RevisionCreateParams, RevisionListResponse, Revisions } from './revisions';

export class Runtimes extends APIResource {
  revisions: RevisionsAPI.Revisions = new RevisionsAPI.Revisions(this._client);

  /**
   * Creates a runtime.
   */
  create(body: RuntimeCreateParams, options?: Core.RequestOptions): Core.APIPromise<Runtime> {
    return this._client.post('/v1/runtimes', { body, ...options });
  }

  /**
   * Returns a list of runtimes in your project.
   */
  list(query?: RuntimeListParams, options?: Core.RequestOptions): Core.APIPromise<RuntimeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<RuntimeListResponse>;
  list(
    query: RuntimeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuntimeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/runtimes', { query, ...options });
  }

  /**
   * Retrieves a runtime.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<Runtime> {
    return this._client.get(`/v1/runtimes/${id}`, options);
  }
}

export interface Runtime {
  id: string;

  engine: 'wasi' | 'microvm' | 'v8';

  language: 'python' | 'javascript';

  name: string;

  revision_id: string;

  status: 'pending' | 'building' | 'succeeded' | 'failed' | 'cancelled';

  additional_python_imports?: string;

  manifest_file?: Runtime.ManifestFile;
}

export namespace Runtime {
  export interface ManifestFile {
    contents: string;

    name: 'requirements.txt' | 'package.json';
  }
}

export interface RuntimeListResponse {
  runtimes: Array<Runtime>;
}

export interface RuntimeCreateParams {
  language: 'python' | 'javascript';

  manifest_file: RuntimeCreateParams.ManifestFile;

  name: string;

  additional_python_imports?: string;

  engine?: 'wasi' | 'microvm' | 'v8';
}

export namespace RuntimeCreateParams {
  export interface ManifestFile {
    contents: string;

    name: 'requirements.txt' | 'package.json';
  }
}

export interface RuntimeListParams {
  /**
   * The number of items to return. Defaults to 100. Maximum is 100.
   */
  limit?: number;

  /**
   * The ID of the item to start after. To get the next page of results, set this to
   * the ID of the last item in the current page.
   */
  starting_after?: string;
}

Runtimes.Revisions = Revisions;

export declare namespace Runtimes {
  export {
    type Runtime as Runtime,
    type RuntimeListResponse as RuntimeListResponse,
    type RuntimeCreateParams as RuntimeCreateParams,
    type RuntimeListParams as RuntimeListParams,
  };

  export {
    Revisions as Revisions,
    type Revision as Revision,
    type RevisionListResponse as RevisionListResponse,
    type RevisionCreateParams as RevisionCreateParams,
  };
}
