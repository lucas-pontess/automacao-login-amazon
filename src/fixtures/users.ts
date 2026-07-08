export const users = {
  valid: {
    email: process.env.AMAZON_EMAIL ?? '',
    password: process.env.AMAZON_PASSWORD ?? '',
  },
  invalidEmail: {
    email: 'email-invalido@teste.com',
    password: '123456',
  },
  emptyEmail: {
    email: '',
    password: '123456',
  },
};
