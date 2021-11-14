import { NextFunction, Request, Response } from "express";
import { Exception400, Exception404 } from "../../exceptions/exceptions";
import OxfordAPIUtility from "../../utils/oxford_utility";
import Controller from "../controller";

class DictionaryController extends Controller {
    private oxfordUtility: OxfordAPIUtility;
    constructor(req: Request, res: Response, next: NextFunction) {
        super(req, res, next);
        this.oxfordUtility = new OxfordAPIUtility();
    }

    /**
     * Get word details from oxford API
     * Add details to mongo db 
     */
    public create = async () => {
        const { word } = this.body;
        const data = await this.proccessData(word);
        this.success201(data, 'Successfully added.');
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

    /**
     * @param word : eg. "hello"
     * @returns data with details fetched from Oxford API
     */
    private proccessData = async (word: string) => {
        let data: any;
        try {
            data = await this.oxfordUtility.getEntries(word);
        } catch (error: any) {
            if (error.response.status === 404) throw new Exception404(error.response.data.error);
            else throw new Exception400('Something went wrong.');
        }
        return data;
    }

}

export default DictionaryController;