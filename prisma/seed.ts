import { PrismaClient } from "@prisma/client";

type Author = {
    firstName: string;
    lastName: string;
}

type Book = {
    title: string;
    isFiction: boolean;
    datePublished: Date;
}

const db = new PrismaClient()

const getAuthors = (): Array<Author> => {
    return [
        {
            firstName: "John",
            lastName: "Doe"
        },
        {
            firstName: "toko",
            lastName: "elo"
        },
        {
            firstName: "Johnny",
            lastName: "KILLIMANJARU"
        },
        {
            firstName: "HEY",
            lastName: "JIMA"
        }
    ]
}

const getBooks = (): Array<Book> => {
    return [
        {
            title: "ABdularrasin",
            isFiction: false,
            datePublished: new Date()
        },
        {
            title: "ROYALE",
            isFiction: true,
            datePublished: new Date()
        },
        {
            title: "JS in 60 sec",
            isFiction: false,
            datePublished: new Date()
        },
        {
            title: "how to became Senior developer in 6 month",
            isFiction: true,
            datePublished: new Date()
        },
    ]
}

export const seed = async (db: PrismaClient) => {
    await Promise.all(
        getAuthors().map((author: Author) => {
            return db.author.create({
                data: {
                    firstName: author.firstName,
                    lastName: author.lastName
                }
            })
        })
    )
    const author = await db.author.findFirst({
        where: {
            lastName: "JIMA"
        }
    })

    await Promise.all(
        getBooks().map((book: Book) => {
            return db.book.create({
                data: {
                    title: book.title,
                    isFiction: book.isFiction,
                    datePublished: book.datePublished,
                    authorId: author!.id
                }
            })
        })
    )

}