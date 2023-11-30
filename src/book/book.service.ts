import { PrismaClient } from "@prisma/client";
import { Author } from "../author/author.service";

type BookRead = {
    id: string;
    title: string;
    datePublished: Date;
    isFiction: boolean;
    author: Author
}

type BookWrite = {
    id: string;
    title: string;
    datePublished: Date;
    isFiction: boolean;
    authorId: string
}

const db = new PrismaClient();

export const listBooks = async (): Promise<BookRead[]> => {
    return db.book.findMany({
        select: {
            id: true,
            title: true,
            datePublished: true,
            isFiction: true,
            author: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true
                }
            }
        }
    })
}

export const getBook = async (id: string): Promise<BookRead | null> => {
    return db.book.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            title: true,
            isFiction: true,
            datePublished: true,
            author: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true
                }
            }
        }
    })
}

export const createBook = async (book: Omit<BookWrite, "id">): Promise<BookRead> => {
    const { title, authorId, datePublished, isFiction } = book

    return db.book.create({
        data: {
            title,
            authorId,
            isFiction,
            datePublished,
        },
        select: {
            id: true,
            title: true,
            isFiction: true,
            datePublished: true,
            author: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true
                }
            }
        }
    })
}

export const updateBook = async (book: Omit<BookWrite, 'id'>, id: string): Promise<BookRead> => {
    const { title, isFiction, datePublished, authorId } = book;
    return db.book.update({
        where:{
            id
        },
        data:{
            title,
            isFiction,
            datePublished,
            authorId
        },
        select: {
            id: true,
            title: true,
            isFiction: true,
            datePublished: true,
            author: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true
                }
            }
        }
    })
}

export const deleteBook = async (id: string): Promise<void> => {
    await db.book.delete({
        where:{
            id
        }
    })
}