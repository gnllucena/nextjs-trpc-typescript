import { createRouter } from './context';
import { exampleRouter } from './controllers/example';
import { authRouter } from './controllers/auth';
import superjson from 'superjson';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('auth.', authRouter);

export type AppRouter = typeof appRouter;
