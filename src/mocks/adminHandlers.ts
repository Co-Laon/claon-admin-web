import { rest } from 'msw';

// admin mocking api, just skeleton
const adminHandlers = [
  rest.get('/admin/lectors/approve', (req, res, ctx) => {
    const response = {};
    return res(ctx.json(response));
  }),
  rest.post('/admin/lectors/:lector_id/approve', (req, res, ctx) => {
    const response = {};
    return res(ctx.json(response));
  }),
  rest.delete('/admin/lectors/:lector_id/reject', (req, res, ctx) => {
    const response = {};
    return res(ctx.json(response));
  }),
  rest.get('/admin/centers/approve', (req, res, ctx) => {
    const response = {};
    return res(ctx.json(response));
  }),
  rest.post('/admin/centers/:center_id/approve', (req, res, ctx) => {
    const response = {};
    return res(ctx.json(response));
  }),
  rest.delete('/admin/centers/:center_id/reject', (req, res, ctx) => {
    const response = {};
    return res(ctx.json(response));
  }),
];

export default adminHandlers;
