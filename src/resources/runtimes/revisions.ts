// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Revisions extends APIResource {
  /**
   * Creates a new runtime revision.
   */
  create(id: string, body: RevisionCreateParams, options?: Core.RequestOptions): Core.APIPromise<Revision> {
    return this._client.post(`/v1/runtimes/${id}/revisions`, { body, ...options });
  }

  /**
   * Lists all revisions for a runtime.
   */
  list(id: string, options?: Core.RequestOptions): Core.APIPromise<RevisionListResponse> {
    return this._client.get(`/v1/runtimes/${id}/revisions`, options);
  }

  /**
   * Retrieves a runtime revision.
   */
  get(runtimeId: string, revisionId: string, options?: Core.RequestOptions): Core.APIPromise<Revision> {
    return this._client.get(`/v1/runtimes/${runtimeId}/revisions/${revisionId}`, options);
  }
}

export interface Revision {
  id: string;

  manifest_file: Revision.ManifestFile;

  runtime_id: string;

  status: 'unspecified' | 'pending' | 'building' | 'succeeded' | 'failed' | 'cancelled';

  additional_python_imports?: string;
}

export namespace Revision {
  export interface ManifestFile {
    contents: string;

    name: 'requirements.txt' | 'package.json';
  }
}

export interface RevisionListResponse {
  revisions: Array<Revision>;
}

export interface RevisionCreateParams {
  manifest_file: RevisionCreateParams.ManifestFile;

  additional_python_imports?: string;
}

export namespace RevisionCreateParams {
  export interface ManifestFile {
    contents: string;

    name: 'requirements.txt' | 'package.json';
  }
}

export declare namespace Revisions {
  export {
    type Revision as Revision,
    type RevisionListResponse as RevisionListResponse,
    type RevisionCreateParams as RevisionCreateParams,
  };
}
