import express, { Request, Response } from 'express';
import cors from 'cors';
import { db } from './db';
import { RowDataPacket } from 'mysql2';
import { InventoryItem } from './types';

const app = express();
app.use(cors());
app.use(express.json());

// Get all inventory items
app.get('/inventory', async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query<RowDataPacket[]>(
      'SELECT * FROM inventory'
    );
    const inventory = rows as InventoryItem[];
    res.json(inventory);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});