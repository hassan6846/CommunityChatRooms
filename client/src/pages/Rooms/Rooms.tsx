import { useState, useEffect } from 'react';
import './Rooms.css';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, ListItemIcon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IoMdAdd } from "react-icons/io";
import Modal from '@mui/material/Modal';
import { ChatContainer, MessageList, MessageInput } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import io from 'socket.io-client';

const roomsData = [
  { id: 1, name: 'General Chat', avatar: 'https://via.placeholder.com/50', lastMessage: 'Hey everyone, welcome to the room!', isPrivate: false },
  { id: 2, name: 'Developers Hub', avatar: 'https://via.placeholder.com/50', lastMessage: 'Can someone help with React?', isPrivate: true },
  { id: 3, name: 'Gaming Zone', avatar: 'https://via.placeholder.com/50', lastMessage: 'What are we playing tonight?', isPrivate: false },
  { id: 4, name: 'Secret Society', avatar: 'https://via.placeholder.com/50', lastMessage: 'The meeting starts at 9 PM.', isPrivate: true },
];

const socket = io("http://localhost:3000"); // Replace with your server URL

const Rooms = () => {
  const [open, setOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]); // Store messages for the selected room
  const [newMessage, setNewMessage] = useState(""); // Message input state

  useEffect(() => {
    // Listen for incoming messages
    socket.on("receiveMessage", (message: any) => {
      if (selectedRoom && message.roomId === selectedRoom.id) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    });

    // Cleanup socket listeners when the component unmounts
    return () => {
      socket.off("receiveMessage");
    };
  }, [selectedRoom]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sendMessage = () => {
    if (selectedRoom && newMessage) {
      const messageData = {
        roomId: selectedRoom.id,
        content: newMessage,
        sender: "User", // Replace with actual user info
      };

      // Emit message to the server
      socket.emit("sendMessage", messageData);
      setNewMessage(""); // Clear input after sending
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <div className="RoomContainer">
      <Modal open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Box>
      </Modal>

      <div className='Room_page_head'>
        <p className='RoomHEAD'>Rooms</p>
        <p onClick={handleOpen} className='ACTNBUTN'>
          Create Now <IoMdAdd color='#fff' style={{ color: "#fff" }} />
        </p>
      </div>

      <Box sx={{ display: 'flex', flexDirection: 'row', height: '80vh', padding: "20px", boxShadow: "rgba(100, 100, 111, 0.123) 0px 7px 20px 0px" }}>
        {/* Sidebar */}
        <Box sx={{ width: '30%', bgcolor: '#fff', p: 2, overflowY: 'auto', borderRadius: "5px" }}>
          <Typography variant="h6" sx={{ mb: 0, fontFamily: "Outfit" }}>#Rooms</Typography>
          <List>
            {roomsData.map((room) => (
              <ListItem
                key={room.id}
                sx={{ mb: 1, border: '1px solid #ddd', borderRadius: 1, cursor: 'pointer' }}
                onClick={() => setSelectedRoom(room)}
              >
                <ListItemAvatar>
                  <Avatar src={room.avatar} alt={room.name} />
                </ListItemAvatar>
                <ListItemText primary={room.name} secondary={room.lastMessage} primaryTypographyProps={{ fontWeight: 'bold' }} />
                <ListItemIcon>
                  <Typography sx={{ whiteSpace: 'pre-line' }}>9 🟢 {'\n'}</Typography>
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Chat Area */}
        <Box sx={{ borderLeft: "2px solid #f4f4f4", borderTop: "1px solid #fff", borderRight: "1px solid #fff", borderBottom: "1px solid #fff", flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
          {selectedRoom ? (
            <ChatContainer>
              <Typography variant="h5" sx={{ mb: 2 }}>{selectedRoom.name}</Typography>
              <MessageList>
                {messages.map((message, index) => (
                  <MessageList.Content key={index}>
                    <p>{message.content}</p>
                  </MessageList.Content>
                ))}
              </MessageList>
              <MessageInput
                value={newMessage}
                onChange={(e:any) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                attachButton={false}
                onSend={sendMessage}
              />
            </ChatContainer>
          ) : (
            <div style={{ backgroundColor: "#f6f6f6", height: '100%', justifyContent: "center", alignItems: "center", width: "100%", display: 'flex', borderRadius: "5px" }}>
              <Typography variant="h6" color="textSecondary">Select a room to start chatting</Typography>
            </div>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Rooms;
