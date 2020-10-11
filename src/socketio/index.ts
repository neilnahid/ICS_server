import { Server } from 'http';
import socketIO from 'socket.io';
import authenticate from './authenticate';
import clientPayload from './interfaces/clientPayload';

async function setupSocketIO(server: Server) {
  const io = socketIO(server);
  io.on('connection', () => {
    console.log('socket.io - ✅');
  });

  io.on('connect', (socket) => {
    socket.on('authenticate', (payload: clientPayload) => {
      authenticate(payload);
    });
  });
  return io;
}

export default setupSocketIO;
