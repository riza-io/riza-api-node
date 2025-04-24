// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { SecretsPagination, type SecretsPaginationParams } from '../pagination';

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
  list(
    query?: SecretListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SecretsSecretsPagination, Secret>;
  list(options?: Core.RequestOptions): Core.PagePromise<SecretsSecretsPagination, Secret>;
  list(
    query: SecretListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SecretsSecretsPagination, Secret> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/secrets', SecretsSecretsPagination, { query, ...options });
  }
}

export class SecretsSecretsPagination extends SecretsPagination<Secret> {}

export interface Secret {
  id: string;

  name: string;
}

export interface SecretCreateParams {
  name: string;

  value: string;
}

export interface SecretListParams extends SecretsPaginationParams {}

Secrets.SecretsSecretsPagination = SecretsSecretsPagination;

export declare namespace Secrets {
  export {
    type Secret as Secret,
    SecretsSecretsPagination as SecretsSecretsPagination,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
  };
}
