import { useRef } from "react";
import EVENTS from "../config/events";
import { useSockets } from "../context/socket.contect";
import sytles from "../styles/Room.modules.css";

function RoomsContainer() {
    const { socket, roomId, rooms } = useSockets();
    const newRoomRef = useRef(null);

    function handleCreateRoom() {
        // Get room name
        const roomName = newRoomRef.current.value || "";

        if (!String(roomName).trim()) return;

        // Emit room created event
        socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName });

        // Set room name input to empty string
        newRoomRef.current.value = "";
    }

    function handleJoinRoom(key) {
        if (key === roomId) return;

        socket.emit(EVENTS.CLIENT.JOIN_ROOM, key);
    }

    return (
        <nav className={sytles.wrapper}>
            <div className={sytles.createRoomWrapper}>
                <input ref={newRoomRef} placeholder="Room name"/>
                <button className="cta" onClick={handleCreateRoom}>Create room</button>
            </div>

            <ul className={sytles.roomList}>
                {Object.keys(rooms).map((key) => {
                    return(
                        <div key={key}>
                            <button 
                                disabled={key===roomId}
                                title={`Join ${rooms[key].name}`}
                                onClick={() => handleJoinRoom(key)}
                            >
                                {rooms[key].name}
                            </button>
                        </div>
                    );
                })}
            </ul>
        </nav>
    )
}

export default RoomsContainer;