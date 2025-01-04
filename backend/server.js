const http = require("http");
const app = require("./app");
const { Server } = require("socket.io");
const connectDB = require("./db/Connectdb");

// Create the HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
    cors: {
        origin: "*", // Update this for security, specifying your client's origin
        methods: ["GET", "POST"],
    },
});

// Handle Socket.IO events
io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Example message handler
    socket.on("message", (msg) => {
        console.log("Message received:", msg);
        io.emit("message", msg); // Broadcast message to all connected clients
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});


//connectdb
 connectDB()
// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
