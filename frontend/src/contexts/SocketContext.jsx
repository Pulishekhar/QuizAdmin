import { createContext, useContext, useEffect, useState } from 'react';
import { socket, connectSocket, disconnectSocket } from '../api/socket';

const SocketContext = createContext();

export function SocketProvider({ children }) {
  const [socketInstance, setSocketInstance] = useState(null);

  useEffect(() => {
    connectSocket();
    setSocketInstance(socket);

    return () => {
      disconnectSocket();
    };
  }, []);

  return (
    <SocketContext.Provider value={socketInstance}>
      {children}
    </SocketContext.Provider>
  );
}

export function useSocket() {
  return useContext(SocketContext);
}