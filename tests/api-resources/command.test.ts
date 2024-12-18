// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Riza from '@riza-io/api';
import { Response } from 'node-fetch';

const client = new Riza({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource command', () => {
  test('exec: only required params', async () => {
    const responsePromise = client.command.exec({ code: 'print("Hello world!")' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('exec: required and optional params', async () => {
    const response = await client.command.exec({
      code: 'print("Hello world!")',
      allow_http_hosts: ['string'],
      args: ['string'],
      env: { foo: 'string' },
      files: [{ contents: 'contents', path: 'path' }],
      http: {
        allow: [
          {
            auth: {
              basic: { password: 'password', user_id: 'user_id' },
              bearer: { token: 'token' },
              header: { name: 'name', value: 'value' },
              query: { key: 'key', value: 'value' },
            },
            host: 'host',
          },
        ],
      },
      language: 'PYTHON',
      limits: { execution_timeout: 0, memory_size: 0 },
      revision: 'revision',
      runtime: 'runtime',
      runtime_revision_id: 'runtime_revision_id',
      stdin: 'stdin',
    });
  });
});
