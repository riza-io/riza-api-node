// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
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
  list(options?: Core.RequestOptions): Core.APIPromise<RuntimeListResponse> {
    return this._client.get('/v1/runtimes', options);
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

  language: 'PYTHON' | 'JAVASCRIPT';

  name: string;

  revision_id: string;

  status: string;

  additional_python_imports?: string;

  manifest_file?: Runtime.ManifestFile;
}

export namespace Runtime {
  export interface ManifestFile {
    contents: string;

    name: 'requirements.txt';
  }
}

export interface RuntimeListResponse {
  runtimes: Array<Runtime>;
}

export interface RuntimeCreateParams {
  language: 'PYTHON' | 'JAVASCRIPT';

  manifest_file: RuntimeCreateParams.ManifestFile;

  name: string;

  additional_python_imports?: string;
}

export namespace RuntimeCreateParams {
  export interface ManifestFile {
    contents: string;

    name: 'requirements.txt';
  }
}

Runtimes.Revisions = Revisions;

export declare namespace Runtimes {
  export {
    type Runtime as Runtime,
    type RuntimeListResponse as RuntimeListResponse,
    type RuntimeCreateParams as RuntimeCreateParams,
  };

  export {
    Revisions as Revisions,
    type Revision as Revision,
    type RevisionListResponse as RevisionListResponse,
    type RevisionCreateParams as RevisionCreateParams,
  };
}
