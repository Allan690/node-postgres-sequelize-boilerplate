import debug from 'debug';
import http from 'http';
import environment from './config/environment';
import app from './app';

const logger = debug('log');
const server = http.createServer(app);

server.listen(environment.PORT, async () => {
  app.set('host', `http://localhost:${environment.PORT}`);

  logger(`Find me on http://localhost:${environment.PORT}`);
});
