import { Book } from '../../domain/Book';
import { TimeTrackerBooksRepository } from '../../domain/TimeTrackerBooksRepository';


export class NotionTimeTrackerBooksRepository extends XClientRepository implements TimeTrackerBooksRepository {

    constructor() {
        super();
    }

    async search(query): Promise<any> {

    }

    async create(data): Promise<any> {
    }

    async update(data): Promise<any> {
    }

}
