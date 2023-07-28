const queryKeys = {
  CENTER: {
    list: ['center', 'list'],
    detail: (id: string) => ['center', id],
  },
  REGISTER: {
    auth: ['register', 'auth'],
    dupCheck: (id: string) => ['register', 'auth', id],
  },
} as const;

export default queryKeys;
