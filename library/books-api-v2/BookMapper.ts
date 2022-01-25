import { Book as BookV1} from "./v1/Book";
import { Book } from "./v2/Book";

export class BookMapper {
    
    static toV1(book: Book): BookV1 {
        return {
            "authorName": book.author.name,
            "title": book.title,
            "copies": book.copies,
            "year": book.year
        }
    }
}

