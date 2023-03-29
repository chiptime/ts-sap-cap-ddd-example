import { Book } from "./Book"

export interface TimeTrackerBooksRepository {
    search(data): Promise<Book[]>

    create(data): Promise<Book>

    update(data): Promise<Book>
}
