import { NextFunction, Request, Response } from "express";
import defaultPagination from "../../config/pagination";
import Controller from "../controller";

class DictionaryController extends Controller {
    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next);
    }

    /**
     * Get word details from oxford API
     * Add details to mongo db 
     */
    public create = async () => {
        const { word } = this.body
        this.success201({ word }, 'Successfully added.');
    }

    /**
     * Read one record from mongo db
     */
    public readOne = async () => {
        const { id } = this.params;
        this.success201({ id }, 'Successfully fetched.');
    }

    /**
     * Read many records from mongo db with 
     * pagination and search option
     */
    public readMany = async () => {
        const { order_by, order, page, size, query } = this.query;
        this.success201({ order_by, order, page, size, query }, 'Successfully fetched.');
    }

    /**
     * Update a word detail from oxford API
     */
    public update = async () => {
        const { id } = this.params;
        this.success201({ id }, 'Successfully updated.');
    }

    /**
     * Delete a word details from database
     */
    public delete = async () => {
        const { id } = this.params;
        this.success201({ id }, 'Successfully deleted.');
    }

}

export default DictionaryController;