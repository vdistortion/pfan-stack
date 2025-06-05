import { FastifyPluginAsync } from 'fastify';

const rootRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get('/api', async (request, reply) => {
    try {
      const client = await fastify.pg.connect();
      const { rows } = await client.query('SELECT NOW()');
      client.release();

      return { time: rows[0].now };
    } catch (err) {
      request.log.error(err);
      reply.status(500).send({ error: 'Internal Server Error' });
    }
  });
};

export default rootRoute;
