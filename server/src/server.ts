import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const uri = process.env.MONGODB_URI || '';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    app.post('/api/contact', async (req, res) => {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).send({ message: 'All fields are required' });
      }

      const collection = client.db('portfolio').collection('messages');
      await collection.insertOne({ name, email, message, createdAt: new Date() });

      res.status(201).send({ message: 'Message received' });
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

  } catch (err) {
    console.error(err);
  }
}

run();
