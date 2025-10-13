# Server

This is a minimal Express server used to serve the built client and provide a health endpoint.

Commands (from repository root):

```bash
# start client dev server
npm run dev

# start server in dev mode (requires server deps installed)
npm run server:dev

# build client and run server in production
npm run build
cd server
npm install
npm run start
```

The server serves static files from `../client/dist` and falls back to `index.html` for SPA routing.
