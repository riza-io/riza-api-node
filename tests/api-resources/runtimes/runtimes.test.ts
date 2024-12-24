// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Riza from '@riza-io/api';
import { Response } from 'node-fetch';

const client = new Riza({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource runtimes', () => {
  test('create: only required params', async () => {
    const responsePromise = client.runtimes.create({
      language: 'PYTHON',
      manifest_file: { contents: 'contents', name: 'requirements.txt' },
      name: 'name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.runtimes.create({
      language: 'PYTHON',
      manifest_file: { contents: 'contents', name: 'requirements.txt' },
      name: 'name',
      additional_python_imports: 'additional_python_imports',
    });
  });

  test('list', async () => {
    const responsePromise = client.runtimes.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.runtimes.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Riza.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.runtimes.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.runtimes.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Riza.NotFoundError,
    );
  });
});