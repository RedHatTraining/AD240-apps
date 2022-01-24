import express from "express";
import { Book } from "./Book";

const PORT = parseInt(process.env.PORT ?? "8080");

const app = express();

const books: Book[] = [
  {
    title: "Frankenstein",
    author: { name: "Mary Shelley", birthDate: new Date(1797, 7, 30) },
    year: 1818,
    copies: 10
  },
  {
    title: "A Christmas Carol",
    author: { name: "Charles Dickens", birthDate: new Date(1812, 1, 7) },
    year: 1843,
    copies: 5,
  },
  {
    title: "Pride and Prejudice",
    author: { name: "Charles Dickens", birthDate: new Date(1775, 11, 16) },
    year: 1813,
    copies: 3,
  },
];

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.get("/books", (_req, res) => {
  res.send(books);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`books-api listening on port ${PORT}`);
});
