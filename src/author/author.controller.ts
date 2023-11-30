import { Request, Response, response } from "express";
import { validationResult } from 'express-validator'
import * as AuthorService from './author.service'

export const getListOfAuthorsController = async (req: Request, res: Response) => {
    try {
        const authors = await AuthorService.listAuthors();
        return res.status(200).json(authors);
    } catch (e: any) {
        return res.status(500).json(e.message)
    }
}


export const getAuthorByIdController = async (req: Request, res: Response) => {
    const id: string = req.params.id
    console.log(id);

    try {
        const author = await AuthorService.getAuthor(id);
        if (author) {
            return res.status(200).json(author)
        }
        return res.status(404).json("Author could not be found")
    } catch (e: any) {
        return res.status(500).json(e.message)
    }
}

export const createAuthorController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const author = req.body;
        console.log(author);
        const newAuthor = await AuthorService.createAuthor(author);
        return res.status(201).json(newAuthor);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
}

export const updateAuthorController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const id: string = req.params.id
    try {
        const author = req.body;
        const updatedAuthor = await AuthorService.updateAuthor(author, id);
        return res.status(200).json(updatedAuthor)
    } catch (e: any) {
        return res.status(400).json(e.message)
    }
}

export const deleteAuthorController = async (req: Request, res: Response) => {
    const id:string = req.params.id;
    try {
        await AuthorService.deleteAuthor(id);
        return res.status(200).json("Author has been successfully deleted!")
    } catch (e: any) {
        return res.status(400).json(e.message)
    }
}