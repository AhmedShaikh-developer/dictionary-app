import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import lookupRouter from './routers/lookup.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Mount the lookup router
app.use('/api/lookup', lookupRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`🛰️  Server listening on http://localhost:${port}`);
});
