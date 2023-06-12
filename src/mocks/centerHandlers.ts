import { CenterNameResponse } from '@/types/common/center';
import { rest } from 'msw';
import { center, uploadedFileUrl } from './mockData';

const centerHandler = [
  // find Id by center name
  rest.get('/centers/name/:name', (req, res, ctx) => {
    const { name } = req.params;
    const response: CenterNameResponse = {
      center_id: '1',
      name: `${name}`,
      address: 'address',
    };
    return res(ctx.json(response));
  }),

  // find center by id
  rest.get('/centers/:center_id', (req, res, ctx) => {
    return res(ctx.json(center));
  }),

  // upload file
  rest.post('/centers/:purpose/file', (req, res, ctx) => {
    return res(ctx.json(uploadedFileUrl));
  }),
];

export default centerHandler;
