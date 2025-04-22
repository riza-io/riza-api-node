// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface RuntimesPaginationResponse<Item> {
  runtimes: Array<Item>;
}

export interface RuntimesPaginationParams {
  starting_after?: string;

  limit?: number;
}

export class RuntimesPagination<Item extends { id: string }>
  extends AbstractPage<Item>
  implements RuntimesPaginationResponse<Item>
{
  runtimes: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: RuntimesPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.runtimes = body.runtimes || [];
  }

  getPaginatedItems(): Item[] {
    return this.runtimes ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<RuntimesPaginationParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const runtimes = this.getPaginatedItems();
    if (!runtimes.length) {
      return null;
    }

    const id = runtimes[runtimes.length - 1]?.id;
    if (!id) {
      return null;
    }

    return { params: { starting_after: id } };
  }
}

export interface ToolsPaginationResponse<Item> {
  tools: Array<Item>;
}

export interface ToolsPaginationParams {
  starting_after?: string;

  limit?: number;
}

export class ToolsPagination<Item extends { id: string }>
  extends AbstractPage<Item>
  implements ToolsPaginationResponse<Item>
{
  tools: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: ToolsPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.tools = body.tools || [];
  }

  getPaginatedItems(): Item[] {
    return this.tools ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<ToolsPaginationParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const tools = this.getPaginatedItems();
    if (!tools.length) {
      return null;
    }

    const id = tools[tools.length - 1]?.id;
    if (!id) {
      return null;
    }

    return { params: { starting_after: id } };
  }
}

export interface SecretsPaginationResponse<Item> {
  secrets: Array<Item>;
}

export interface SecretsPaginationParams {
  starting_after?: string;

  limit?: number;
}

export class SecretsPagination<Item extends { id: string }>
  extends AbstractPage<Item>
  implements SecretsPaginationResponse<Item>
{
  secrets: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: SecretsPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.secrets = body.secrets || [];
  }

  getPaginatedItems(): Item[] {
    return this.secrets ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<SecretsPaginationParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const secrets = this.getPaginatedItems();
    if (!secrets.length) {
      return null;
    }

    const id = secrets[secrets.length - 1]?.id;
    if (!id) {
      return null;
    }

    return { params: { starting_after: id } };
  }
}
