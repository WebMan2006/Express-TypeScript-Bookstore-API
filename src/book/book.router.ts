import express from 'express'
import { createBookController, deleteBookController, getBookController, listBooksController } from './book.controller'
import { body } from 'express-validator'
import { updateAuthorController } from '../author/author.controller'

const bookRouter = express.Router()

//GET: get all books
bookRouter.get('/', listBooksController)

//GET: get book by id
bookRouter.get('/:id', getBookController);

//POST: create new Book
bookRouter.post("/", body("title").isString(),
    body("authorId").isString(),
    body("datePublished").isDate().toDate(),
    body("isFiction").isBoolean(),
    createBookController)

//PUT: Edit Book
bookRouter.post("/", body("title").isString(),
    body("authorId").isString(),
    body("datePublished").isDate().toDate(),
    body("isFiction").isBoolean(),
    updateAuthorController)

//DELETE: delete Book
bookRouter.delete("/:id", deleteBookController)

export default bookRouter;