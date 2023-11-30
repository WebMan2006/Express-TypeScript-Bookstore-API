import { Request, Response } from "express";
import * as bookService from './book.service'
import { validationResult } from "express-validator";

export const listBooksController = async (req: Request, res: Response) => {
    try {
        const books = await bookService.listBooks();
        return res.status(200).json(books)
    } catch (e: any) {
        return res.status(400).json(e.message)
    }
}

export const getBookController = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        const book = await bookService.getBook(id);
        return res.status(200).json(book);
    } catch (e: any) {
        return res.status(400).json(e.message)
    }
}

export const createBookController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const book = req.body;
        const createdBook = await bookService.createBook(book)
        return res.status(200).json(createdBook)
    } catch (e: any) {
        return res.status(400).json(e.message)
    }
}

export const updateBookController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const id: string = req.params.id
        const book = req.body;
        const createdBook = await bookService.updateBook(book, id)
        return res.status(200).json(createdBook)
    } catch (e: any) {
        return res.status(400).json(e.message)
    }
}

export const deleteBookController = async( req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        await bookService.deleteBook(id);
        return res.status(200).json("Book successfully deleted")
    } catch (e: any) {
        return res.status(400).json(e.message)
    }
}