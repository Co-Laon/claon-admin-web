import { CenterNameResponse } from '@/types/common/center';
import { rest } from 'msw';
import { center, centerDetail, centerList, uploadedFileUrl } from './mockData';

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
    return res(ctx.json(centerDetail));
  }),

  // upload file
  rest.post('/centers/:purpose/file', (req, res, ctx) => {
    return res(ctx.json(uploadedFileUrl));
  }),

  // find centers
  rest.get('/centers', (req, res, ctx) => {
    return res(ctx.json(centerList));
  }),
];

export default centerHandler;
