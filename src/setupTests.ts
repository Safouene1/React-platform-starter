import matchers from '@testing-library/jest-dom/matchers';
import { Headers, Request } from 'node-fetch';

expect.extend(matchers);

// @ts-ignore
globalThis.Request = Request;
globalThis.Headers = Headers;
