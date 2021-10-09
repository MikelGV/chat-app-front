import { useContext, createContext } from "react";
import io from "socket.io-client";
import {SOCKET_URL} from "../config/default";

const SocketContext = createContext({})

function SocketProvider(props:any) {
    return <SocketContext.Provider value={{}}>{...props}</SocketContext.Provider>;
}

export const useSocket = () => useContext(SocketContext);

export default SocketProvider;