# Express & TypeScript Bookstore API
This repository hosts the backend for a bookstore application. Built with Express.js, TypeScript, PostgreSQL, and Prisma, it provides a robust and scalable solution for managing a database of authors and books with comprehensive CRUD (Create, Read, Update, Delete) operations.

## Features
Express.js Framework: A minimal and flexible Node.js web application framework providing a robust set of features for web and mobile applications.
TypeScript Integration: Ensures code reliability and maintainability through static typing.
PostgreSQL Database: Utilizes PostgreSQL for robust, reliable, and persistent data storage.
Prisma ORM: Simplifies database operations with an easy-to-use ORM for TypeScript and Node.js.
CRUD Operations: Complete endpoints to add, retrieve, update, and delete authors and books.
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
What things you need to install the software and how to install them:

```bash

- Node.js
- PostgreSQL
- npm or yarn
```
## Installing
A step-by-step series of examples that tell you how to get a development environment running:

1. **Clone the repo:**
```bash
git clone https://github.com/WebMan2006/Express-TypeScript-Bookstore-API.git
```
2. **Install NPM packages:**
```bash
npm install
```
3. **Set up your PostgreSQL database and note down your credentials.**
4. **Create a .env file in the root directory and fill in your PostgreSQL credentials.**
5. **Run the development server:**
```bash
npm start
```
## API Endpoints
**The following endpoints are available:**

- POST /authors - Add a new author.

- GET /authors - Retrieve all authors.

- GET /authors/:id - Retrieve a single author by ID.

- PUT /authors/:id - Update an author's details.

- DELETE /authors/:id - Delete an author.

- POST /books - Add a new book.

- GET /books - Retrieve all books.

- GET /books/:id - Retrieve a single book by ID.

- PUT /books/:id - Update a book's details.

- DELETE /books/:id - Delete a book.

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
