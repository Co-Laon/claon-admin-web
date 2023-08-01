import { setupWorker } from 'msw';
import authhandler from './authHandlers';
import centerHandler from './centerHandlers';
import adminHandlers from './adminHandlers';
import membershipHandlers from './membershipHandlers';

const handlers = [
  ...authhandler,
  ...centerHandler,
  ...adminHandlers,
  ...membershipHandlers,
];
// This configures a request mocking server with the given request handlers.
export const worker = setupWorker(...handlers);
