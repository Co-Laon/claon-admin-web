import { setupWorker } from 'msw';
import authhandler from './authHandlers';

const handlers = [...authhandler];
// This configures a request mocking server with the given request handlers.
export const worker = setupWorker(...handlers);
