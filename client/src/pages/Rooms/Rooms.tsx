// Components
import Header from '../../components/header/Header';

// CSS
import './Rooms.css';

// MUI Components
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, ListItemIcon, Typography } from '@mui/material';
import { Box } from '@mui/system';



// ChatScope Component
import { ChatContainer, MessageList, MessageInput } from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'; // Import required styles
import React from 'react';

// Demo Data
const roomsData = [
  {
    id: 1,
    name: 'General Chat',
    avatar: 'https://via.placeholder.com/50',
    lastMessage: 'Hey everyone, welcome to the room!',
    isPrivate: false,
  },
  {
    id: 2,
    name: 'Developers Hub',
    avatar: 'https://via.placeholder.com/50',
    lastMessage: 'Can someone help with React?',
    isPrivate: true,
  },
  {
    id: 3,
    name: 'Gaming Zone',
    avatar: 'https://via.placeholder.com/50',
    lastMessage: 'What are we playing tonight?',
    isPrivate: false,
  },
  {
    id: 4,
    name: 'Secret Society',
    avatar: 'https://via.placeholder.com/50',
    lastMessage: 'The meeting starts at 9 PM.',
    isPrivate: true,
  },
];

const Rooms = () => {
  // State for selected room
  const [selectedRoom, setSelectedRoom] = React.useState<any>(null);

  return (
    <div className="RoomContainer">
      <Header title="Browse Rooms" />
      <Box sx={{ display: 'flex', flexDirection: 'row', height: '80vh', padding: "20px", boxShadow: "rgba(100, 100, 111, 0.123) 0px 7px 20px 0px" }}>
        {/* Sidebar */}
        <Box sx={{ width: '30%', bgcolor: '#fff', p: 2, overflowY: 'auto', borderRadius: "5px" }}>
          <Typography variant="h6" sx={{ mb: 0, fontFamily: "Outfit" }}>
            #Rooms
          </Typography>
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
                <ListItemText
                  primary={room.name}
                  secondary={room.lastMessage}
                  primaryTypographyProps={{ fontWeight: 'bold' }}
                />
                <ListItemIcon>
                  <Typography sx={{ whiteSpace: 'pre-line' }}>
                    9 🟢 {'\n'} 
                  </Typography>
                </ListItemIcon>
              </ListItem>
            ))}
          </List>

        </Box>

        {/* Chat Area */}
        <Box sx={{

          borderLeft: "2px solid #f4f4f4",
          borderTop: "1px solid #fff",
          borderRight: "1px solid #fff",
          borderBottom: "1px solid #fff", flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3
        }}>

          {selectedRoom ? (
            <ChatContainer>
              <Typography variant="h5" sx={{ mb: 2 }}>
                {selectedRoom.name}
              </Typography>
              <MessageList>
                {/* Placeholder for chat messages */}
                <MessageList.Content>

                  <div>

                    <p>
                      Example message in <b>{selectedRoom.name}</b>.
                    </p>
                  </div>
                </MessageList.Content>
              </MessageList>
              <MessageInput placeholder="Type a message..." attachButton={false} />
            </ChatContainer>
          ) : (
            <Typography variant="h4" color="textSecondary">
              Select a room to start chatting
            </Typography>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Rooms;
