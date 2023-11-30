import { PrismaClient } from "@prisma/client";

export type Author = {
    id: string;
    firstName: string;
    lastName: string;
}

const db = new PrismaClient();

export const listAuthors = async (): Promise<Author[]> => {
    return await db.author.findMany({
        select: {
            id: true,
            firstName: true,
            lastName: true,
            createdAt: true
        }
    })
}

export const getAuthor = async(id: string): Promise<Author | null> => {
    return await db.author.findUnique({
        where: {
            id: id
        }
    })
}

export const createAuthor = async(Author: Omit<Author, "id">): Promise<Author> => {
    const { firstName, lastName } = Author;
    return await db.author.create({
        data:{
            firstName,
            lastName
        },
        select: {
            id: true,
            firstName: true,
            lastName: true,
        }
    })
}


export const updateAuthor = async(author: Omit<Author, "id">, id: string): Promise<Author> => {
    const {firstName, lastName} = author;
    return await db.author.update({
        where:{
            id
        },
        data:{
            firstName,
            lastName
        },
        select:{
            id: true,
            firstName: true,
            lastName: true
        }
    })
}


export const deleteAuthor = async(id: string): Promise<void> => {
    await db.author.delete({
        where:{
            id
        }
    })
}