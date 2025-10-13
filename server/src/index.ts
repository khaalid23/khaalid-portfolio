import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Health check
app.get('/health', (_req, res) => res.json({ ok: true }));

// Serve client static files when built
const clientDist = path.join(__dirname, '../../client/dist');
app.use(express.static(clientDist));

// Fallback to index.html for SPA
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
