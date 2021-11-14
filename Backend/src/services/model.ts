import { Connection, EntityManager, getConnection, getMongoManager, getMongoRepository } from "typeorm";
import defaultPagination from "../config/pagination";
import Pagination from "../types/pagination";

class Model {
    public pagination: Pagination;
    public connection: Connection;
    public manager: EntityManager;
    public repository: any;

    constructor(entity?: any) {
        this.pagination = defaultPagination;
        this.connection = getConnection("default");
        this.manager = getMongoManager("default");
        if ( entity ) this.repository = getMongoRepository(entity);
    }
    
    public paginationOptions = (order_by: string, order: string, page: number, size: number) => {
        const column_name: string = order_by ?? this.pagination.sort_by;
        const sort_direction: string = order ?? this.pagination.sort;
        const page_number: number = Number(page) ?? this.pagination.page;
        const take: number = Number(size) ?? this.pagination.size;

        const options = {
            order: { [column_name]: sort_direction },
            skip: ( (page_number - 1) * take),
            take,
        };
        return options;
    }

}
export default Model;