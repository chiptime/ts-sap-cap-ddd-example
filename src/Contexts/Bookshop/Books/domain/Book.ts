import { Author } from "../../Authors/Author";

export class Book {
    ID: string;
    title: string;
    descr: string;
    author: Author;
    genre: any;
    stock: number;
    price: number;
    currency: string;

    constructor(
    ) {
    }

    toPrimitives() {

        return {
        };
    }
}
