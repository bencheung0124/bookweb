In the server directory, you can run:

### `npm run genbooks`  to generate books data

### `npm run start`  to start the server

In the client directory, you can run:

### `npm start` to start the client with proxy to the server with default port 3000 in server .env file.

or

### `npm run build` and add following code in server.js at server directory for production

app.use('/', express.static('../../client/build'));
