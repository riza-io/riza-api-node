// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Secrets extends APIResource {
  /**
   * Create a secret in your project.
   */
  create(body: SecretCreateParams, options?: Core.RequestOptions): Core.APIPromise<Secret> {
    return this._client.post('/v1/secrets', { body, ...options });
  }

  /**
   * Returns a list of secrets in your project.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<SecretListResponse> {
    return this._client.get('/v1/secrets', options);
  }
}

export interface Secret {
  id: string;

  name: string;
}

export interface SecretListResponse {
  secrets: Array<Secret>;
}

export interface SecretCreateParams {
  name: string;

  value: string;
}

export declare namespace Secrets {
  export {
    type Secret as Secret,
    type SecretListResponse as SecretListResponse,
    type SecretCreateParams as SecretCreateParams,
  };
}
