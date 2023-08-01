const queryKeys = {
  CENTER: {
    list: ['center', 'list'],
    detail: (id: string) => ['center', id],
  },
  REGISTER: {
    auth: ['register', 'auth'],
    dupCheck: (id: string) => ['register', 'auth', id],
  },
  MEMBERSHIP: {
    list: (centerId: string) => ['membership', centerId],
  },
} as const;

export default queryKeys;
