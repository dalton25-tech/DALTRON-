import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nexaRoutes from './routes/nexaRoutes.js';

const app = express();

// Comma-separated list of allowed browser origins. Defaults to the Vite dev server.
const allowedOrigins = (process.env.CORS_ORIGIN ?? 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: '16kb' }));

app.get('/health', (_req, res) => {
  res.json({
    status: 'online',
    system: 'Nexa Backend',
  });
});

app.use('/api/nexa', nexaRoutes);

const PORT = Number(process.env.PORT ?? 4000);

app.listen(PORT, () => {
  console.log(`Nexa Backend running on http://localhost:${PORT}`);
});
