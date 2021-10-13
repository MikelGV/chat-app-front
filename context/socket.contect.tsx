import { createContext, useContext, useState } from "react";
import io, {Socket} from "socket.io-client";
import { SOCKET_URL } from "../config/default";

interface Context {
    socket: Socket;
    username?: string;
    setUsername: Function;
    messages?: {message: string; time: string; username: string}[];
    setMessages: Function;
    roomId?: string;
    rooms: string;
}