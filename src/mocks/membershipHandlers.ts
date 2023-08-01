import { rest } from 'msw';
import { feeData } from './mockData';

const membershipHandlers = [
  rest.get('/centers/0/fees', (req, res, ctx) => {
    return res(ctx.json(feeData));
  }),
];

export default membershipHandlers;
