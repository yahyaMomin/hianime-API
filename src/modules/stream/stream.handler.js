import { NotFoundError, validationError } from '@/utils/errors.js';
import { getServers } from '../servers/servers.handler.js';
import streamExtract from './stream.extract.js';

export default async function streamHandler(c) {
  let { id, server, type } = c.req.valid('query');

  const servers = await getServers(id);

  const selectedServer = servers[type].find((el) => el.name === server);
  if (!selectedServer) throw new validationError('invalid or server not found', { server });

  const response = await streamExtract({ selectedServer, id });
  if (!response) throw NotFoundError('Something Went Wtong While Decryption');
  return response;
}
