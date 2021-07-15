
import socketClient from "socket.io-client";
import PORT from "./config";
const socket = socketClient(PORT)




export default socket