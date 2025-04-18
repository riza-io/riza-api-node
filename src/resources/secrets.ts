// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
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
  list(query?: SecretListParams, options?: Core.RequestOptions): Core.APIPromise<SecretListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SecretListResponse>;
  list(
    query: SecretListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecretListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/secrets', { query, ...options });
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

export interface SecretListParams {
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

export declare namespace Secrets {
  export {
    type Secret as Secret,
    type SecretListResponse as SecretListResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
  };
}
