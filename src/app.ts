import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express'
import { authorRouter } from "./author/author.router";
import bookRouter from './book/book.router';

dotenv.config();
const app = express();
const PORT:number = Number(process.env.PORT) || 3500;

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/authors', authorRouter)
app.use('/api/books', bookRouter)

app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`);
})