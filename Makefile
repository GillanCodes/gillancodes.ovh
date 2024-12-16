dev:
	concurrently "nodemon ./api/dist/server.js" "cd client && npm start"
