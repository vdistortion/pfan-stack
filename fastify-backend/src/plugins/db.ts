import fp from 'fastify-plugin';
import fastifyPostgres from '@fastify/postgres';

export default fp(async (fastify) => {
  fastify.register(fastifyPostgres, {
    connectionString: process.env.DATABASE_URL,
  });
});
