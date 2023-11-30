import express from "express"
import { createAuthorController, deleteAuthorController, getAuthorByIdController, getListOfAuthorsController, updateAuthorController } from "./author.controller";
import { body } from "express-validator";
export const authorRouter = express.Router();


// GET: List of all Authors
authorRouter.get('/', getListOfAuthorsController)

// Get: A single Author By ID
authorRouter.get('/:id', getAuthorByIdController)

// POST: create Author
authorRouter.post('/', body("firstName").isString(), body("lastName").isString(), createAuthorController)

//PUT: update Author
authorRouter.put("/:id", body("firstName").isString(), body("lastName").isString(), updateAuthorController)

//DELETE: delete Author
authorRouter.delete("/:id", deleteAuthorController)
