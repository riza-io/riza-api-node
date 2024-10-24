// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SecretsAPI from './secrets';

export class Secrets extends APIResource {
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

export namespace Secrets {
  export import Secret = SecretsAPI.Secret;
  export import SecretListResponse = SecretsAPI.SecretListResponse;
}
