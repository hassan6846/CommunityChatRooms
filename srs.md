# EchoChat
 - Product Description

## Overview
RoomChat is a simple, room-based chat application that allows users to create an account using their **email** and **password**, browse existing chat rooms, and join them to engage in real-time communication. The application ensures secure access through **login and registration**, offering a basic yet effective solution for chatting in private or public rooms with real-time messaging.

---

## Key Features

### 1. **User Registration & Login**
- Users can easily **sign up** with their **email** and **password**.
- Once registered, users can **log in** using their credentials.
- Passwords are securely stored and protected using industry-standard encryption techniques.

### 2. **Room Browsing**
- Users can **browse** a list of available chat rooms.
- Rooms can be categorized by topic, type, or purpose (e.g., public rooms, private rooms, etc.).
- Each room has a unique name and is open for browsing.

### 3. **Room Joining**
- Users can **join** any public room that does not require a password.
- For **private rooms**, users must have the correct **password** to join.
- Once inside a room, users can begin interacting with others in real time.

### 4. **Real-Time Messaging**
- The app supports **real-time** chat within rooms using **Socket.IO**.
- Users can send and receive messages instantly within their chosen room.
- Users can send text-based messages and see incoming messages as they are sent.

### 5. **Room Creation (Optional Feature)**
- Registered users can create their own rooms, set a name for the room, and optionally set a **password** for secure access.
- Once the room is created, it will be available for browsing and joining.

### 6. **Simple User Interface**
- Clean and easy-to-use interface with minimal distractions.
- Responsive design for use on both desktop and mobile devices.
- Easy navigation between login, room browsing, and chat interactions.

### 7. **Security**
- **Email/password** authentication ensures secure user access.
- Rooms can be secured with passwords to limit access to invited users only.
- The system uses **JWT tokens** to manage session security and ensure authorized access.

---