import Fastify from 'fastify';
import dotenv from 'dotenv';
import dbPlugin from './plugins/db';
import rootRoute from './routes/root';

dotenv.config();

export function buildApp() {
  const app = Fastify({ logger: true });

  app.register(dbPlugin);
  app.register(rootRoute);

  return app;
}
