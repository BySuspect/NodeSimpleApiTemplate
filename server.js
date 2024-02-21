const http = require('http');
const app = require('./app'); // Import the Express app you defined in app.js

const port = process.env.PORT || 5050; // Define the port for the server to listen on

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Start listening on the specified port
server.listen(port, () => {
  console.log(`Server Started at Port ${port}`);
});
