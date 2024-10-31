// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

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

export declare namespace Secrets {
  export { type Secret as Secret, type SecretListResponse as SecretListResponse };
}
