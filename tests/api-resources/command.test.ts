// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Riza from '@riza-io/api';
import { Response } from 'node-fetch';

const riza = new Riza({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource command', () => {
  test('exec: only required params', async () => {
    const responsePromise = riza.command.exec({ code: 'print("Hello world!")', language: 'PYTHON' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('exec: required and optional params', async () => {
    const response = await riza.command.exec({
      code: 'print("Hello world!")',
      language: 'PYTHON',
      args: ['string', 'string', 'string'],
      env: { foo: 'string' },
      stdin: 'string',
    });
  });
});
