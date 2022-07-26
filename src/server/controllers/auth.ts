import { createAuthenticatedRouter } from '../middlewares/authentication';

export const authRouter = createAuthenticatedRouter()
  .query('getSession', {
    resolve({ ctx }) {
      return ctx.session;
    },
  })
  .query('getSecretMessage', {
    async resolve({ ctx }) {
      return 'You are logged in and can see this secret message!';
    },
  });
