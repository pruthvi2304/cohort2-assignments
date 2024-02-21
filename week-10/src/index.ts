// index.ts
import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Define Zod schema for user signup validation
const SignupSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

// Define Zod schema for todo creation validation
const TodoSchema = z.object({
  content: z.string().min(1),
  userId: z.number()
});

// User Signup Endpoint
app.post('/signup', async (req: Request, res: Response) => {
  try {
    const { username, password } = SignupSchema.parse(req.body);
    const user = await prisma.user.create({
      data: {
        username,
        password,
      },
    });
    res.json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Create Todo Endpoint
app.post('/todos', async (req: Request, res: Response) => {
  try {
    const { content, userId } = TodoSchema.parse(req.body);
    const todo = await prisma.todo.create({
      data: {
        content,
        userId,
      },
    });
    res.json(todo);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Fetch Todos Endpoint
app.get('/todos/:userId', async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const todos = await prisma.todo.findMany({
      where: {
        userId,
      },
    });
    res.json(todos);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


